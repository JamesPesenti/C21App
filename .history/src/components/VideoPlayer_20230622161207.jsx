import React from 'react';
import { View } from 'react-native';
import { WebView } fromm "react-native-webview"

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
