import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageC from '../atoms/ImageC'
import IconText from '../molecules/IconText'
import TextC from '../atoms/TextC'
import { IStore } from '../../services/models/StoreModel'

type CardStoreProps = {
  store: IStore,
}

const CardStore = ({ store }: CardStoreProps) => {
  const { name, bannerUrl, distanceInKm, openTime, closeTime, isOpen } = store
  return (
    <View style={styles.card}>
      <ImageC uri={bannerUrl} height={103} />
      <View style={{ height: 11 }} />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, display:'flex' }}>
          <TextC size='body1' color='black' weight='600' props={{ numberOfLines: 1 }}>{name}</TextC>
          <TextC color='gray' weight='500' size='body1'>{isOpen ? 'Abierto' : 'Cerrado'}</TextC>
        </View>
        <View style={{ width: 5 }} />
        <View style={{ alignItems: 'flex-end' }}>
          <IconText icon='location' color='gray' weight='500' size='body1'>{distanceInKm}km</IconText>
          <IconText icon='alarm' color='gray' weight='500' size='body1'>{openTime} / {closeTime}</IconText>
        </View>
      </View>
    </View>
  )
}

export default CardStore

const styles = StyleSheet.create({
  card: {
    elevation: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingTop: 8,
    paddingHorizontal: 12,
    paddingBottom: 16
  }
})