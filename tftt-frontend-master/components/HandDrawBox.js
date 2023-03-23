import React from 'react';
import styles from '../styles/HandDrawnBox.module.css';

const EmbeddedYouTubeVideo = (videoId) => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        title="YouTube Video"
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${videoId}`}
        height="100%"
        width="100%"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowFullScreen
      />
    </div>
  );
};

export default function HandDrawBox({
  title = false,
  text = false,
  text1 = false,
  text2 = false,
  text3 = false,
  text4 = false,
  videoID = false,
  variation = 'Light',
}) {
  if (variation === 'Light') {
    return (
      <div className={`m-6 border-8 border-custom-brown bg-custom-whitegray text-black rounded-tl-xl-sm rounded-tr-sm-xl rounded-bl-sm-xl rounded-br-xl-sm p-4 w-flex ${styles.box}`}>
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-custom-silver">
          {title}
        </h1>

        <p className = "font-extrabold">{text}</p>
        <br />

        <p className = "font-extrabold">{text1}</p>
        <br />

        <p className = "font-extrabold">{text2}</p>
        <br />

        <p className = "font-extrabold">{text3}</p>
        <br />

        <p>{text4}</p>
      </div>
    );
  }

  if (variation === 'Dark') {
    return (
      <div className={`m-6 border-5 border-custom-whiteblue bg-custom-silver text-white rounded-tl-xl-sm rounded-tr-sm-xl rounded-bl-sm-xl rounded-br-xl-sm p-4 w-flex ${styles.box}`}>
        <div className="d-flex flex-column">
          <h1 className="font-medium font-bold leading-tight text-5xl mt-0 mb-2 text-custom-silver" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            {title}
          </h1>

          <p className = "font-extrabold text-3xl">{text}</p>
          <br />


        </div>
        <div> 
          {EmbeddedYouTubeVideo(videoID)}
        </div>
      </div>
    );
  }
}

