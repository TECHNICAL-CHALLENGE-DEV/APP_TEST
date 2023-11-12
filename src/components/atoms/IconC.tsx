import React from 'react'
import { View } from 'react-native'
import Alarm from '../../assets/images/alarm.svg'
import Location from '../../assets/images/location_outline.svg'

type IconCProps = {
  children?: any,
  color?: 'black' | 'white' | 'gray' | 'brown',
  size: 'h5' | 'body1'
  weight?: '500' | '600',
  icon: 'alarm' | 'location'
}

const colors = {
  black: '#000000',
  gray: '#C4C4C4',
  white: '#FFFFFF',
  brown: '#392E2E'
}

const sizes = {
  h5: 24,
  body1: 14,
}

const IconC = ({ color = 'black', size, weight = '500', icon }: IconCProps) => {


  const renderIcon = () => {

    const styles = {
      width: sizes[size],
      height: sizes[size],
      color: colors[color]
    }

    switch (icon) {
      case 'alarm':
        return <Alarm {...styles} />
      case 'location':
        return <Location {...styles} />
    }
  }

  return (
    <View>
      {renderIcon()}
    </View>
  )
}

export default IconC
