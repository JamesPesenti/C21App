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
               resizeMode="cover"
               style={{top: "auto", width: 500, height: 200}}
               source={{ uri: 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4' }}
            />
      </View>
    </>
  )
}

export default VideoContainer

const styles = StyleSheet.create({
   videoContainer: {
      flex: 0,
      justifyContent: "center",
      alignSelf: "center",
      textAlign: "center",
      backgroundColor: "white"
   },
})