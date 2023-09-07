import React, { useState } from "react";
import useStore from "../store";

const MovieUrlForm = () => {
    const [url, setUrl] = useState("");
    const addMovieUrl = useStore((state) => state.addMovieUrl);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (url.trim()) {
            addMovieUrl(url);
            setUrl("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter YouTube URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default MovieUrlForm;
