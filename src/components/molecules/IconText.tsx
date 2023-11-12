import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconC from '../atoms/IconC'
import TextC from '../atoms/TextC'

type IconTextProps = {
  children?: any,
  color?: 'black' | 'white' | 'gray' | 'brown',
  size: 'h5' | 'body1',
  icon: 'alarm' | 'location',
  weight?: '500' | '600',
}

const IconText = ({ children, icon, color = 'black', size = 'body1', weight = '500' }: IconTextProps) => {

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ alignSelf: 'center' }}>
        <IconC icon={icon} color={color} size={size} />
      </View>
      <View style={{ width: 5 }} />
      <TextC color={color} weight={weight} size={size}>
        {children}
      </TextC>
    </View>
  )
}

export default IconText
