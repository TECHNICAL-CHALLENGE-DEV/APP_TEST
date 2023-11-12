import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'

type ImageCProps = {
  uri: string,
  width?: number,
  height: number,
}

const ImageC = ({ uri, width, height }: ImageCProps) => {

  const [isLoading, setIsLoading] = useState(true)
  const loadEnd = () => {
    setIsLoading(false)
  }

  return (
    <View>
      <Image style={[{ width: width ?? '100%', height, borderRadius: 2 }]} source={isLoading ? require('../../assets/images/placeholder.png') : { uri }} onLoadEnd={loadEnd} />
    </View>
  )
}

export default ImageC

const styles = StyleSheet.create({})