import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { fetchMovieCredits } from "../../services/moviesApi";
import noAvatar from "../../images/default.jpg";
import s from "./Cast.module.css";
import { notFoundToast } from "../OnToastError";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function onFetchMovies(movieId) {
      try {
        const casts = await fetchMovieCredits(movieId);
        console.log(casts);

        if (casts.length === 0) {
          throw new Error();
        }

        setCast(casts);
      } catch (error) {
        notFoundToast();
      }
    }
    onFetchMovies(movieId);
  }, [movieId]);

  return (
    <ul className={s.list}>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id} className={s.item}>
          <img
            className={s.photo}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : noAvatar
            }
            alt="actor"
          />
          <p className={s.name}>{name}</p>
          <p className={s.character}>{character || "unknown"}</p>
        </li>
      ))}
    </ul>
  );
}
