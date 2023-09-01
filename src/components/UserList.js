// src/AxiosMovie.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

const AxiosMovie = ({ url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((response) => {
        setMovies(response.results);
      });
  }, []);

  return (
    <>
      <h1>AXIOS로 영화 정보 가져오기</h1>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          vote_average={movie.vote_average}
          backdrop_path={movie.backdrop_path}
        ></Movie>
      ))}
    </>
  );
};

export default AxiosMovie;
