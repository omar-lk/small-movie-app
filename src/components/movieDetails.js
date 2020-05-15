import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const MovieDetails = ({ movie }) => {
  const { dispatch } = useContext(MovieContext);
  return (
    <li onClick={() => dispatch({ type: "DELETE_MOVIE", id: movie.id })}>
      <div>{movie.name}</div>
      <div>{movie.director}</div>
    </li>
  );
};
export default MovieDetails;
