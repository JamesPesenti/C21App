 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 import { useRouter } from "expo-router"
 
 const searchHomes = () => {
   return (
     <View style={styles.container}>
       <Text>Search Homes</Text>
     </View>
   )
 }
 
 export default searchHomes
 
 const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: 20,
    padding: 50
  }
 })