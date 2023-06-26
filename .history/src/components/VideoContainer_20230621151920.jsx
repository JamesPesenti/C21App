import React from 'react';

const VideoContainer = () => {
  return (
    <div style={styles.videoContainer}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.video}
      >
        <source src="https://resources.atproperties.com/images/website/heroes/atp/chicago-city61eaf1cd2df07.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoContainer;

const styles = {
  videoContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    paddingTop: '56.25%', // Assuming 16:9 aspect ratio, adjust as needed
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};
