import React from 'react';
import SideVideo from './SideVideo';

function Lists({videos, selectVideo}) {
    const videoLists = videos.map(video => ( 
        <SideVideo
          selectVideo={selectVideo}
          key={video.id.videoId}
          video={video}
        />
    ));
    return (
        <div className='box_list'>
            {videoLists}
        </div>
    );
}

export default Lists;