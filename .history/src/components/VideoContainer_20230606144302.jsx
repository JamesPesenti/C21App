import { StyleSheet, Text, View } from 'react-native'
import Video from "react-native-video"

const VideoContainer = () => {
  return (
    <>
      <View style={styles.videoContainer}>
            <Text>Video</Text>
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