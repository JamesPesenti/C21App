

import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'
import { Video } from "expo-av"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const width = Dimensions.get('window').width
const videoWidth = wp('100%') 
const videoHeight = hp('100%') 


const VideoContainer = () => {
  const videoSource = 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4' 

  return (
    <View style={styles.videoContainer}>
      {Platform.OS === 'web' ? (
        <video
          autoPlay
          loop
          muted
          controls={false}
          style={styles.video}
          source={videoSource}
        />
      ) : (
        <Video 
            isLooping
            isMuted
            shouldPlay
            useNativeControls={false}
            resizeMode="cover"
            style={{ width: videoWidth, height: videoHeight }}
            source={{ uri: 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4' }}
          />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  videoContainer: {
    marginTop: -50, 
    backgroundColor: 'white',
  },
  video: {
    width: width,
    height: '100%',
  },
})

export default VideoContainer
