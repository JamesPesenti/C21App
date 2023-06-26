import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter, useSearchParams } from "expo-router"


const navBarModal = () => {

 const router = useRouter()

 const {name, lastName} = useSearchParams()

  return (
   <>
     <View style={styles.container}>
      <Text style={styles.text}>Nav Bar</Text>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>Listings</Text>
      <Text style={styles.text}>Recent Sales</Text>
      <Text style={styles.text}>Contact</Text>
      <Text style={styles.text}>786.111.1111</Text>
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
   backgroundColor: "white"
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
 text: {
  fontSize: 25,
  marginVertical: 10,
  borderBottomColor: "papayawhip",
  borderWidth: 3
 }
})