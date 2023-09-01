import React, { useEffect, useState } from "react";
import axios from "axios";

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
    </>
  );
};

export default AxiosMovie;
