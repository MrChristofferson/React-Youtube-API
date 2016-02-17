import React  from 'react'
import VideoListItem  from './video_list_item.js'

  const VideoList = (props) => {
    const videoItems = props.videos.map(video => {
      return (
        <VideoListItem
          video={video}
          key={video.etag}
          handleVideoSelect={props.handleVideoSelect}
        />
      )
    });

  return (
    <ul>
      {videoItems}
    </ul>
  );
}

export default VideoList;
