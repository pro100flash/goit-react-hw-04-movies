import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import s from "./Searchbar.module.css";

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = ({ currentTarget }) => {
    setQuery(currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.info("👺 Enter the name of movie you want to search ");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchForm_button}></button>

        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
