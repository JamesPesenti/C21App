import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'
import { Video } from "expo-av"

const width = Dimensions.get("window").width

const VideoContainer = () => {
  
  return (
    <>
      <View style={styles.videoContainer}>
            <Video 
               isLooping
               isMuted
               shouldPlay
               useNativeControls={false}
               resizeMode="cover"
               style={{ alignSelf: 'stretch', width: 1000, height: 500}}
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


import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Video from 'react-native-video';

const windowWidth = Dimensions.get('window').width;
const videoHeight = (windowWidth / 16) * 9; // Assuming 16:9 aspect ratio, adjust as needed

const VideoContainer = () => {
  return (
    <View style={styles.videoContainer}>
      <Video
        source={{ uri: 'https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4' }}
        resizeMode="cover"
        style={styles.video}
        repeat
        muted
        controls={false}
        shouldPlay
      />
    </View>
  );
};

export default VideoContainer;

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: videoHeight,
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
    width: '100%',
    height: '100%',
  },
});
