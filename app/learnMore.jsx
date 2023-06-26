import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router"


const learnMore = () => {

 const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>About Me</Text>
      <Pressable
       style={styles.goBackButton}
       onPress={() => router.back()}
      >
       <Text style={styles.goBackText}>Go Back</Text>
      </Pressable>

    </View>
  )
}

export default learnMore

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
   color: "gainsboro", 
   fontSize: 18,
   fontWeight: 100,
   letterSpacing: .5,
   justifyContent: 'center',
   alignItems: "center",
   textAlign: "center",
 },
})