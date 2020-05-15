import React from "react";
import "./App.css";
import MovieContextProvider from "./context/movieContext";
import NavBar from "./components/navBar";
import MovieList from "./components/movieList";
import NewMovieForm from "./components/newMovieForm";

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <NavBar></NavBar>
        <MovieList></MovieList>
        <NewMovieForm></NewMovieForm>
      </MovieContextProvider>
    </div>
  );
}

export default App;
