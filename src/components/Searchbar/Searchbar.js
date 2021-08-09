import s from "./Searchbar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const movieName = e.target.elements.movieName.value;
    onSearch(movieName);

    e.target.elements.movieName.value = " ";
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSearch}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          name="movieName"
          placeholder="Search movies"
        />
      </form>
    </header>
  );
};
export default SearchBar;
