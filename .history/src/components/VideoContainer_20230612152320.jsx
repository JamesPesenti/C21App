import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Video } from "expo-av"

const width = Dimensions.get("window").width

const VideoContainer = () => {
  return (
    <>
      <View style={styles.videoContainer}>
            <Video 
               isLooping
               isMuted
               shouldPlay
               useNativeControls={false}
               resizeMode="cover"
               style={{top: -50, width: 500, height: 500}}
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
      opacity: 0.5,
      backgroundColor: "black"
   }
})