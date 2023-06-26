import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Reviews = ({ item }) => {
  return (
    <>
      <View style={styles.container}>
         <Text>{item.comment}</Text>
         <Text>{item.initials}</Text>
      </View>
    </>
  )
}

export default Reviews

const styles = StyleSheet.create({
   container: {
      padding: 50,
      
   }
})