import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter, useSearchParams } from "expo-router"


const navBarModal = () => {

 const router = useRouter()

 const {name, lastName} = useSearchParams()

  return (
   <>
     <View style={styles.container}>
      <Text>Nav Bar</Text>
      <Text>Home</Text>
      <Text>Listings</Text>
      <Text>Recent Sales</Text>
      <Text>Contact</Text>
      <Text>786.111.1111</Text>
      <Pressable
       style={styles.goBackButton}
       onPress={() => router.back()}
      >
       <Text style={styles.goBackText}>Go Back</Text>
      </Pressable>
    </View>
   </>
  )
}

export default navBarModal

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   textAlign: "center",
   padding: 50,
   backgroundColor: "inverted"
 },
 goBackButton: {
   shadowColor: "yellow",
   shadowOffset: 1,
   shadowOpacity: 1,
   shadowRadius: 10,
   elevation: 2,
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
   color: "gainsboro", 
   fontSize: 18,
   fontWeight: 100,
   letterSpacing: .5,
   justifyContent: 'center',
   alignItems: "center",
   textAlign: "center",
 },
})