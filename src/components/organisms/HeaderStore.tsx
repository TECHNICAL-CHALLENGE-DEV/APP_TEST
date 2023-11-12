import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextC from '../atoms/TextC'
import MyLocation from '../../assets/images/my_location.svg'

const BACKGROUND_COLOR = '#02A9AB'

type HeaderStoreProps = {
  onPressLocation: () => void
}

const HeaderStore = ({ onPressLocation }: HeaderStoreProps) => {
  return (
    <>
      <StatusBar
        backgroundColor={BACKGROUND_COLOR}
        barStyle='dark-content'
      />
      <View style={styles.container}>
        <View />
        <TextC size='h5' weight='600' color='white'>Tiendas</TextC>
        <TouchableOpacity onPress={onPressLocation}>
          <MyLocation width={25} height={25} />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default HeaderStore

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    paddingVertical: 14,
    width: '100%',
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    borderBottomStartRadius: 2,
    borderBottomEndRadius: 2
  }
})