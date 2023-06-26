import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'
import { Video } from "expo-av"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const VideoContainer = () => {
  const videoWidth = wp('100%') // Set the video width to 100% of the screen width
  const videoHeight = hp('30%') // Set the video height to 30% of the screen height

  return (
    <View style={styles.videoContainer}>
      <Video 
        isLooping
        isMuted
        shouldPlay
        useNativeControls={false}
        resizeMode="cover"
        style={{ width: videoWidth, height: videoHeight }}
        source={{ uri: 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4' }}
      />
    </View>
  )
}

export default VideoContainer

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  }
})
