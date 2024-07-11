import React, { useRef } from 'react';
import './VideoPlayer.css'; // Adjusted to match the correct CSS filename and path
import Video from '../../assets/Video.mp4'; // Adjusted to match your video asset

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={Video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;
