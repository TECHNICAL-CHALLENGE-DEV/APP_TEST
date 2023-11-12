import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Children } from 'react'
import TextC from '../atoms/TextC'

const BACKGROUND_COLOR = '#02A9AB'

type ButtonCProps = {
  children: any,
  onPress: () => void
}

const ButtonC = ({ children, onPress }: ButtonCProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{backgroundColor: BACKGROUND_COLOR, paddingHorizontal: 15, paddingVertical: 12, borderRadius: 5}}>
        <TextC color='white' size='body1' weight='600'>{children}</TextC>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonC

const styles = StyleSheet.create({})