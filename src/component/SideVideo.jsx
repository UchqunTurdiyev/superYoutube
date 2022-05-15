import React from 'react';

function SideVideo({video, selectVideo}) {
    return (
        <div>
            <div className='videoItems' onClick={() => selectVideo(video)}>
                 <img src={video.snippet.thumbnails.medium.url} alt="overlay" style={{marginRight: "20px"}} />
                 <div className='titleVideo'>
                     <b>{video.snippet.title.slice(0, 30)}... </b><br />
                     <span>{video.snippet.description.slice(0, 40)}...</span><br />
                     <i>{video.snippet.publishTime.slice(0, 10)}</i>
                 </div>
            </div>
        </div>
    );
}

export default SideVideo;