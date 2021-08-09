import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import noPosterImg from "../../images/default.jpg";
import s from "./MovieItem.module.css";

export default function MovieItem({
  id,
  title,
  location,
  poster,
  releaseDate,
  name,
}) {
  return (
    <li className={s.listItem} key={id}>
      <Link
        to={{
          pathname: `/movies/${id}`,

          state: { from: location },
        }}
      >
        <img
          src={
            poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPosterImg
          }
          alt={title || name}
          className={s.poster}
        />
        <h2 className={s.title}>
          {title || name}
          {releaseDate && <span> ({releaseDate.slice(0, 4)})</span>}
        </h2>
      </Link>
    </li>
  );
}

MovieItem.propTypes = {
  poster: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
};
