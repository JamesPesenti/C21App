import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VideoContainer = () => {
  return (
    <>
      <View style={styles.videoContainer}>
         <View>
            <Text>Video</Text>
         </View>
      </View>
    </>
  )
}

export default VideoContainer

const styles = StyleSheet.create({
   videoContainer: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
      textAlign: "center",
      backgroundColor: "white"
   },
})