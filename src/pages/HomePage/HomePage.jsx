import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovie } from "../../services/moviesApi";
import { onErrorToast } from "../../components/OnToastError";
import Button from "../../components/Button/Button";
import MoviesList from "../../components/MovieList/MovieList";

import s from '../../pages/HomePage/HomePage.module.css'

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
    async function onFetchMovies() {
      try {
        const movies = await fetchMovie(page);
        setMovies((state) => [...state, ...movies]);
      } catch (error) {
        onErrorToast();
      }
    }
    onFetchMovies();
  }, [page]);

  function onLoadMoreBtn() {
    setPage((page) => page + 1);
  }

  const showImageList = movies.length > 0;

  return (
    <div>
      <h2 className={s.Title}>Trending today</h2>

      {movies && <MoviesList movies={movies} location={location} />}

      {showImageList && (
        <Button onClick={onLoadMoreBtn} aria-label="add contact" />
      )}
    </div>
  );
}

export default HomePage;
