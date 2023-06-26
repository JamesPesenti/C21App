import React from 'react';
import { View, WebView } from 'react-native';

const VideoPlayer = () => {
  return (
    <View style={{ aspectRatio: 16 / 9, flex: 1 }}>
      <WebView
        source={{ uri: 'https://www.youtube.com/embed/VIDEO_ID' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default VideoPlayer;
