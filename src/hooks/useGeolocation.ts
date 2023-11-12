import React, { useState } from 'react'
import { Alert, Linking, PermissionsAndroid } from 'react-native';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';

export interface IGeolocation {
  latitude?: number,
  longitude?: number,
  error: boolean
}

export const useGeoLocation = () => {

  const [hasPosition, setHasPosition] = useState(false)

  const openSettings = () => {
    Linking.openSettings();
  }

  const requestPermission = async () => {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permiso para acceder a tu ubicación',
        message: 'Nos ayudara a brindarte la información de los locales cerca a tu area',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancelar'
      })
    if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      Alert.alert(
        'Permiso de ubicación requerido',
        'La aplicación necesita acceso a tu ubicación. Vaya a la configuración de la aplicación y otorgue permiso.',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Abrir configuración', onPress: openSettings },
        ],
      );
    }
    return granted
  }

  const getCurrentPosition = () => new Promise((resolve, error) => Geolocation.getCurrentPosition(resolve, error, { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }));


  const getUserLocation = async (): Promise<IGeolocation> => {
    try {
      const granted = await requestPermission()
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasPosition(true)
        const location = await getCurrentPosition();
        return { error: false, latitude: (location as GeoPosition)?.coords?.latitude, longitude: (location as GeoPosition)?.coords?.longitude }
      } else {
        return { error: true } as IGeolocation
      }
    } catch (err) {
      return { error: true } as IGeolocation
    }

  }

  return { hasPosition, getUserLocation }
}