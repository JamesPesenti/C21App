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
      textAlign: "center",
      padding: 50,
   },
   comment: {
      textAlign: "center",
      paddingHorizontal: 150
   },
   initials: {
      textAlign: "center",
      padding: 50
   }
})