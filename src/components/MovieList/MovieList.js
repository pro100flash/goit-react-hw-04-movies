import PropTypes from "prop-types";
import MovieItem from "../MovieItem/MovieItem";
import s from "./MovieList.module.css";

export default function MovieList({ movies, location }) {
  return (
    <ul className={s.list}>
      {movies &&
        movies.map(({ id, title, name, poster_path, release_date }) => (
          <MovieItem
            id={id}
            title={title}
            location={location}
            key={id}
            name={name}
            releaseDate={release_date}
            poster={poster_path}
          />
        ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
