import { StyleSheet, Text, View } from 'react-native'
import { Video } from "expo-av"

const VideoContainer = () => {
  return (
    <>
      <View style={styles.videoContainer}>
      <View style={styles.titleContainer}>
                  <Text style={styles.title}>Work with Pedro Guerra</Text>
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
      alignItems: "center",
      backgroundColor: "white"
   },
   titleContainer: {
      position: 'absolute',
      top: 16,
      left: 16,
      right: 16,
      alignItems: 'center',
      backgroundColor: 'gainsboro',
      paddingVertical: 8,
   },
   title: {
      fontSize: 18,
      color: 'white',
   }
})