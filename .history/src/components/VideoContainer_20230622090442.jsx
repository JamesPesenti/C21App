import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native'

const width = Dimensions.get('window').width

const VideoContainer = () => {
  const videoSource =
    Platform.OS === 'web'
      ? { uri: 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4' }
      : { uri: 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4' }

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
        <Text>Video playback is not supported on this platform.</Text>
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
