import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import { Video } from 'expo-av';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const width = Dimensions.get("screen").width


const VideoContainer = () => {
  const [videoWidth, setVideoWidth] = useState(Dimensions.get('window').width);
  const [videoHeight, setVideoHeight] = useState(0);

  const videoSource = 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4';

  const handleScreenResize = () => {
    setVideoWidth(Dimensions.get('screen').width);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', handleScreenResize);

    return () => {
      Dimensions.removeEventListener('change', handleScreenResize);
    };
  }, []);

  const calculateVideoHeight = () => {
    const aspectRatio = 16 / 9; // Adjust this based on the video's aspect ratio
    return videoWidth / aspectRatio;
  };

  useEffect(() => {
    setVideoHeight(calculateVideoHeight(0));
  }, [videoWidth]);

  return (
    <View style={styles.videoContainer}>
      {Platform.OS === 'web' ? (
        <video autoPlay loop muted controls={false} style={styles.video}>
          <source src={videoSource} type="video/mp4" />
        </video>
      ) : (
        <Video
          isLooping
          isMuted
          shouldPlay
          useNativeControls={false}
          resizeMode="cover"
          style={{ width: videoWidth, height: 500 }}
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
  },
  video: {
    flex: 1,
    width: "auto",
    height: 'auto',
  },
});

export default VideoContainer;
