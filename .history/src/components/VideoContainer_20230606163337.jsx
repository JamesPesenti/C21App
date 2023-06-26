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
               style={{flex: 1, top: -160, width: 500, height: 200}}
               source={{ uri: 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4' }}
            >
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Work with Pedro Guerra</Text>
                </View>
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
   },
   video: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
   titleContainer: {
      position: 'absolute',
      top: 16,
      left: 16,
      right: 16,
      alignItems: 'center',
      backgroundColor: 'transparent',
      paddingVertical: 8,
   },
   title: {
      fontSize: 28
   }
})