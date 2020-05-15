import React, { useState, useContext } from "react";
import { MovieContext } from "../context/movieContext";

const NewMovieForm = () => {
  const { dispatch } = useContext(MovieContext);
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_MOVIE", movie: { name, director } });
    setName("");
    setDirector("");
  };
  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="movie name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          placeholder="movie director"
        />
      </div>
      <input type="submit" value="add movie" />
    </form>
  );
};
export default NewMovieForm;
