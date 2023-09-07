import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../molecules/MovieCard";
import useStore from "../store";

const MovieList = () => {
    const navigate = useNavigate();
    const { movieList, setCurrentMovieUrl } = useStore((state) => state);

    const handlePlay = (url) => {
        setCurrentMovieUrl(url);
        navigate("/player");
    };

    return (
        <div>
            {movieList.map((movie, index) => (
                <MovieCard
                    key={index}
                    title={`Movie ${index + 1}`}
                    url={movie}
                    onPlay={(url) => handlePlay(url)}
                />
            ))}
        </div>
    );
};

export default MovieList;
