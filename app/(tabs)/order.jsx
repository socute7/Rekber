import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Order() {
  return (
    <View style={styles.container}>
      <Text>Order</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#1c1c1e',
  },
});