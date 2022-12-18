import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const { query } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    searchData();
  }, [query]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=6837bd4e09b77dba7aea565bca6e8f08&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };
  const searchData = async (e) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6837bd4e09b77dba7aea565bca6e8f08&language=en-US&page=1&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
