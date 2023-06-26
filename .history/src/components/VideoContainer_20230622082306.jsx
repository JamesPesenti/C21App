import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'
import { Video } from "expo-av"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen

const width = Dimensions.get("window").width

const VideoContainer = () => {

  const videoWidth = wp("100%")
  const videoHeight = hp("30%")
  
  return (
    <>
      <View style={styles.videoContainer}>
            <Video 
               isLooping
               isMuted
               shouldPlay
               useNativeControls={false}
               resizeMode="cover"
               style={{ alignSelf: 'stretch', width: videoWidth, height: videoHeight}}
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
      backgroundColor: "white"
   }
})


