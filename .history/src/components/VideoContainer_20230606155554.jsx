import { StyleSheet, Text, View } from 'react-native'
import { Video } from "expo-av"

const VideoContainer = () => {
  return (
    <>
      <View style={styles.videoContainer}>
            <Text>Video</Text>
            <Video 
               isMuted
               shouldPlay
               useNativeControls
               resizeMode="contain"
               style={{width: 300, height: 300}}
               source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
            />
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