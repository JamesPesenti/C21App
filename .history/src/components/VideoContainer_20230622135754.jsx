

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
      
        <Video 
            isLooping
            isMuted
            shouldPlay
            useNativeControls={false}
            resizeMode="cover"
            style={{ width: videoWidth, height: videoHeight }}
            source={videoSource}
          />
    
    </View>
  )
}

const styles = StyleSheet.create({
  videoContainer: {
    marginTop: -50, 
    backgroundColor: 'white',
  }
})

export default VideoContainer
