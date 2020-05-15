import React, { createContext, useState, useReducer, useEffect } from "react";
import uuid from "react-uuid";
import { movieReducer } from "../reducers/movieReducer";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movies, dispatch] = useReducer(movieReducer, [], () => {
    const localdata = localStorage.getItem("movies");
    return localdata ? JSON.parse(localdata) : [];
  });
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);
  return (
    <MovieContext.Provider value={{ movies, dispatch }}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
