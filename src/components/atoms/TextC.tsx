import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TextCProps = {
  children?: any,
  color?: 'black' | 'white' | 'gray' | 'brown',
  size?: 'h5' | 'body1' 
  weight?: '500' | '600',
  props?: any
}

const colors = {
  black: '#000000',
  gray: '#C4C4C4',
  white: '#FFFFFF',
  brown: '#392E2E'
}

const weights = {
  600: '600',
  500: '500'
}

const sizes = {
  h5: 24,
  body1: 14,
}

const TextC = ({ children, color = 'black', size = 'body1', weight = '500', props = {} }: TextCProps) => {

  return (
    <Text
      {...props}
      style={[{
        color: colors[color],
        fontWeight: weights[weight] as any,
        fontSize: sizes[size],
        flexWrap: 'wrap',
      }]}>
      {children}
    </Text>
  )
}

export default TextC
