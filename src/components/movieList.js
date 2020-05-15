import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import MovieDetails from "./movieDetails";

const MovieList = () => {
  const { movies } = useContext(MovieContext);
  {
    console.log(movies);
  }
  return (
    <div className="movie-list">
      <ul>
        {movies.map((movie) => {
          return <MovieDetails movie={movie}></MovieDetails>;
        })}
      </ul>
    </div>
  );
};
export default MovieList;
