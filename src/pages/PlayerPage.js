import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import useStore from "../store";
import Button from '../atoms/Buttons';

const PlayerPage = () => {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(0.8);

    const currentMovieUrl = useStore((state) => state.currentMovieUrl);

    const togglePlayPause = () => {
        setPlaying(!playing);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    return (
        <div>
            <ReactPlayer
                ref={playerRef}
                url={currentMovieUrl}
                playing={playing}
                volume={volume}
            />
            <div>
                <Button onClick={togglePlayPause}>
                    {playing ? "Pause" : "Play"}
                </Button>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
        </div>
    );
};

export default PlayerPage;
