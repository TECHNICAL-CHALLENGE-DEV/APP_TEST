import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardStore from '../components/organisms/CardStore'
import HeaderStore from '../components/organisms/HeaderStore'
import { Status, useStores } from '../hooks/useStores'
import { IStore } from '../services/models/StoreModel'
import ErrorRequest from '../components/organisms/ErrorRequest'
import Loading from '../components/organisms/Loading'
import { useGeoLocation } from '../hooks/useGeolocation'

const HomeScreen = () => {

  const { stores, fetchProducts, status } = useStores()
  const { getUserLocation, hasPosition } = useGeoLocation()

  const renderItem: ListRenderItem<IStore> = ({ item }) => {
    return <CardStore store={item} key={item.id} />
  }

  const getLocation = async () => {
    if (hasPosition == false) {
      const currentPosition = await getUserLocation()
      if (currentPosition.error == false) {
        await fetchProducts(currentPosition.latitude, currentPosition.longitude)
      }
    }
  }

  const renderScreen = () => {
    switch (status) {
      case Status.ERROR:
        return <ErrorRequest onPress={fetchProducts} />
      case Status.SUCCESS:
        return (
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={stores}
            renderItem={renderItem}
            contentContainerStyle={{ gap: 15, marginHorizontal: 23, marginVertical: 22 }} />
        )
      case Status.LOADING:
        return <Loading />
    }
  }

  return (
    <View style={{ display: 'flex', flex: 1 }}>
      <HeaderStore onPressLocation={getLocation} />
      {renderScreen()}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})