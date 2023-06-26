 import { StyleSheet, Text, View, Pressable } from 'react-native'
 import React from 'react'
 import { useRouter, Link } from "expo-router"


 const searchHomes = () => {

  const router = useRouter()

   return (
     <View style={styles.container}>
       <Text>Search Homes</Text>
       <Pressable
        style={{backgroundColor: 'white'}}
        onPress={() => router.back()}
       >
        <Text>Go Back</Text>
       </Pressable>

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
  },
  goBackButton: {
    marginTop: -10,
    width: 170,
    height: 50,
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 1,
  },
  goBackText: {
    color: "white", 
    fontSize: 18,
    fontWeight: 100,
    letterSpacing: .5,
    justifyContent: 'center',
    alignItems: "center",
    textAlign: "center",
  },
 })