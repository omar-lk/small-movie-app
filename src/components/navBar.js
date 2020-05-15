import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const NavBar = () => {
  const { movies } = useContext(MovieContext);
  return (
    <div className="head">
      <h3>movie list Total: {movies.length} </h3>
    </div>
  );
};
export default NavBar;
