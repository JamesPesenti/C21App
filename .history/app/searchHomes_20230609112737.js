 import { StyleSheet, Text, View, Button } from 'react-native'
 import React from 'react'
 import { useRouter } from "expo-router"


 const searchHomes = () => {

  const router = useRouter()

   return (
     <View style={styles.container}>
       <Text>Search Homes</Text>
       <Button 
        style={{backgroundColor: 'White'}}
        onPress={() => router.back()}
        title="Go Back"
       />
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