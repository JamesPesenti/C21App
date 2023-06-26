import { StyleSheet, Text, View } from 'react-native'
import { Video } from "expo-av"

const VideoContainer = () => {
  return (
    <>
      <View style={styles.videoContainer}>
            <Video 
               isLooping
               isMuted
               shouldPlay
               useNativeControls={false}
               resizeMode="contain"
               style={{top: -20, width: '100%', height: 500}}
               source={{ uri: 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4' }}
            >
            </Video>
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
   }
})