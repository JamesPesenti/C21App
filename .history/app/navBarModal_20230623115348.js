// Nav Bar
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter, useSearchParams } from "expo-router"


const navBarModal = () => {

 const router = useRouter()

 const {name, lastName} = useSearchParams()

  return (
   <>
     <View style={styles.container}>
        <Link href="/" style={styles.text}>
          <Text>Home</Text>
        </Link>
        <Link href="/learnMore" style={styles.text}>
          <Text>About Me</Text>
        </Link>
        <Link href="/searchHomes" style={styles.text}>
          <Text>Current Listings</Text>
        </Link>
        <Link href="/recentSales" style={styles.text}>
          <Text>Recent Sales</Text>
        </Link>
        <Link href="/contactModal" style={styles.text}>
          <Text>Contact</Text>
        </Link>
        {/* <Pressable
        style={styles.goBackButton}
        onPress={() => router.back()}
        >
        <Text style={styles.goBackText}>Go Back</Text>
        </Pressable> */}
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
   backgroundColor: "black"
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
  color: "azure",
  fontSize: 25,
  marginVertical: 10,
  borderBottomColor: "papayawhip",
  // borderColor: "",
  borderWidth: 2
 }
})