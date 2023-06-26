import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Reviews = ({ item }) => {
  return (
    <>
      <View style={styles.container}>
         <Text style={styles.comment}>{item.comment}</Text>
         <Text style={styles.initials}>{item.initials}</Text>
      </View>
    </>
  )
}

export default Reviews

const styles = StyleSheet.create({
   container: {
      flex: 1,
      textAlign: "center",
      padding: 50,
   },
   comment: {
      textAlign: "center",
      lineHeight: 20,
      paddingVertical: 10
   },
   initials: {
      textAlign: "center",
      padding: 50
   }
})