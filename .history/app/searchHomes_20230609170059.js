 import { StyleSheet, Text, View, Pressable } from 'react-native'
 import React from 'react'
 import { Link, useRouter, useSearchParams } from "expo-router"


 const searchHomes = () => {

  const router = useRouter()

  const {name, lastName} = useSearchParams()

   return (
     <View style={styles.container}>
       <Text>Search Homes</Text>
       <Pressable
        style={styles.goBackButton}
        onPress={() => router.back()}
       >
        <Text style={styles.goBackText}>Go Back</Text>
       </Pressable>

     </View>
   )
 }
 
 export default searchHomes
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 50,
    backgroundColor: "white"
  },
  goBackButton: {
    marginVertical: 10,
    width: 170,
    height: 50,
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "gainsboro",
    borderWidth: 2,
    borderRadius: 1,
  },
  goBackText: {
    shadowColor: "blue",
    shadowOffset: 3,
    shadowOpacity: .1,
    shadowRadius: 10,
    color: "gainsboro", 
    fontSize: 18,
    fontWeight: 100,
    letterSpacing: .5,
    justifyContent: 'center',
    alignItems: "center",
    textAlign: "center",
  },
 })