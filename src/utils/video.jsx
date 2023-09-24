import React from 'react';
import video from '../assets/cover.mp4';

function coverVideo(className) {
  return (
    <video
      data-testid="video-background"
      autoPlay
      muted
      loop
      playsInline
      className={className}
      id="video"
      src={video}
    />
  );
}
export default coverVideo;
