import React from 'react';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import { Video } from 'expo-av';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const VideoContainer = () => {
  const videoWidth = wp('100%'); // Adjust as needed
  const videoHeight = hp('25%'); // Adjust as needed

  const videoSource = 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4';

  return (
    <View style={styles.videoContainer}>
      {Platform.OS === 'web' ? (
        <video autoPlay loop muted controls={false} style={styles.video} source={videoSource} />
      ) : (
        <Video
          isLooping
          isMuted
          shouldPlay
          useNativeControls={false}
          resizeMode="cover"
          style={{ width: videoWidth, height: videoHeight }}
          source={{ uri: videoSource }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: "100%"
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default VideoContainer;
