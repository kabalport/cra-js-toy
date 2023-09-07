import React from "react";
import MovieList from "../organisms/MovieList";
import MovieUrlForm from "../organisms/MovieUrlForm";

const HomePage = () => {
    return (
        <div>
            <MovieUrlForm />
            <MovieList />
        </div>
    );
};

export default HomePage;
