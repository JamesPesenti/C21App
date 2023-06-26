import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const VideoContainer = () => {
  const videoWidth = wp('100%');
  const videoHeight = hp('100%');

  return (
    <View style={styles.container}>
      <View style={[styles.videoWrapper, { width: videoWidth, height: videoHeight }]}>
        <Video
          source={{ uri: 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4' }}
          style={styles.video}
          resizeMode="cover"
          shouldPlay
          isLooping
          isMuted
          useNativeControls={false}
        />
      </View>
    </View>
  );
};

export default VideoContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoWrapper: {
    alignSelf: 'center',
  },
  video: {
    flex: 1,
  },
});
