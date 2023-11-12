import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextC from '../atoms/TextC'
import ButtonC from '../molecules/ButtonC'

type ErrorRequestProps = {
  onPress: () => void
}

const ErrorRequest = ({ onPress }: ErrorRequestProps) => {
  return (
    <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Image source={require('../../assets/images/ice_cream.png')} style={{ width: 230, height: 210 }} />
      <View style={{ height: 10 }} />
      <TextC size='h5' color='black' weight='600' >Oh no!</TextC>
      <View style={{ height: 10 }} />
      <TextC>Algo salió mal</TextC>
      <View style={{ height: 3 }} />
      <TextC>Por favor intentalo de nuevo</TextC>
      <View style={{ height: 15 }} />
      <ButtonC onPress={onPress}>INTENTAR DE NUEVO</ButtonC>
    </View>
  )
}

export default ErrorRequest

const styles = StyleSheet.create({})