import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BACKGROUND_COLOR = '#02A9AB'

const Loading = () => {
  return (
    <View style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator color={BACKGROUND_COLOR} size='large' />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})