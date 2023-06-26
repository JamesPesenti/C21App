import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native'
import { Video } from "expo-av"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const videoWidth = width
const videoHeight = 200

const width = Dimensions.get('window').width

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
    flex: 1,
    backgroundColor: 'white',
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})

export default VideoContainer






