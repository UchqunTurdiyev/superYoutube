import React from 'react';
import LogoPng from './youtubelogotip.png';

function Video({video: {id: {videoId}, snippet: {title, channelTitle, description}}}) {
    if (!videoId) return <p className='result'>No Result</p>

    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    return (
        <>
            <div className='videoIframe'>
                <iframe
                frameBorder="0"
                allowFullScreen
                title="video play"
                src={videoSrc}
                />
            </div>
            <div className="videoInfo">
                <a href="https://t.me/Uchqun_Turdiev">#Uchqun Turdiev</a>
                <a href="https://github.com/uchqun007">  #githup</a>
                <a href="https://www.instagram.com/uchqun_turdiyev/">  #Instagram</a>
                <a href="https://portifolio-uchqunjon.netlify.app/">  #Portifolio   </a>
                <h1  className='videoTitle'>{title}</h1>
                <h3 className='chanelTitle'>{channelTitle}</h3>
                <p className='descriptionVideo'>{description}</p>
            </div>
            <div className="videoComment">
                <div className="cpmetnIcons">

                </div>
                <div className="myComent">
                    <div className="comentText">
                        <img src={LogoPng} alt="" />
                        <div>
                        <h2>Uchqun Turdiev</h2>
                        <span>1 подписчиков</span>
                        </div>
                    </div>
                    <div className="ben">
                        <button>вы подписаниы</button>
                        <i class="bi bi-bell"></i>
                    </div>
                </div>
                     <form action="" className='comentForm'>
                         <label htmlFor="">24 комментария</label>
                         <input type="text" placeholder='Введите текст комментария' />
                         <div className="btn_group">
                         <i class="bi bi-emoji-smile"></i>
                         <div className="btns">
                             <button>ОТМЕНА</button>
                             <button className='btn-clear'>Оставить комментарий</button>
                         </div>
                         </div>
                     </form>
            </div>
        </>
    );
}

export default Video;