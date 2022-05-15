
import './App.css';
import api from './component/api'
import {useState} from "react";
import Search from "./component/Search";
import Video from './component/Video';
import Lists from './component/Lists';

function App() {
  const [videos, setVideos] = useState([])
  const [selectVideo, setSelectVideo] = useState({id: {}, snippet: {}})

  async function videoSubmit(searchTerm) {
    const {data: {items: videos} } = await api.get("search", {
      params: {
         part: "snippet",
        maxResults: 15,
        key: 'AIzaSyCgmmaLpeHPzfmNcpTDrT5HJbCj3ufUu9w',
        q: searchTerm
      }
    });
    console.log(videos)
    setVideos(videos);
     setSelectVideo(videos[0]);
  }
  return (
    <>
      <div className="searchSec">
        <Search onSubmit={videoSubmit} />
      </div>
      <div className='videoMain'>
        <div className='videoSection'>
             <Video video={selectVideo} /> 
        </div>
        <div className='videoList'>
             <Lists videos={videos} selectVideo={setSelectVideo} /> 
        </div>
      </div>
    </>
  );
}

export default App;
