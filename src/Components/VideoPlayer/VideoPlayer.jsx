import React, { useRef } from 'react';
import './VideoPlayer.css'; // Ensure this path is correct
import Video from '../../assets/Video.mp4'; // Ensure this path is correct

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    return (
        <div className={`video-player ${playState ? 'show' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={Video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;
