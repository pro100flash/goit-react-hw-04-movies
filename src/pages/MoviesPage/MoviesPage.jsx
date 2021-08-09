import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import  SearchBar from '../../components/Searchbar/Searchbar'
import { fetchMoviesSearchQuery } from '../../services/moviesApi'
import Button from '../../components/Button/Button'
import { onErrorToast } from '../../components/OnToastError'
import MovieList from '../../components/MovieList/MovieList'


export default function MoviesPage() {
  const [movieName, setMovieName] = useState(null)
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  const location = useLocation()

  function handleFormSubmit(movieName) {
    if (movieName.trim() === '') {
      onErrorToast()

      return
    }
    resetState()
    setMovieName(movieName)
  }

  function resetState() {
    setMovieName(null)
    setPage(1)
    setMovies([])
  }

  useEffect(() => {
    if (!movieName) {
      return
    }
    async function onFetchMovies() {
      try {
        const movies = await fetchMoviesSearchQuery(movieName, page)

        if (movies.length === 0) {
          throw new Error()
        }

        setMovies((state) => [...state, ...movies])
      } catch (error) {
        onErrorToast()
      }
    }

    onFetchMovies()
  }, [movieName, page])

  useEffect(() => {
    function scrollPageToEnd() {
      setTimeout(() => {
        window.scrollBy({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        })
      }, 1000)
    }

    if (page > 1) {
      scrollPageToEnd()
    }
  }, [movies, page])

  function onLoadMoreBtn() {
    setPage((page) => page + 1)
  }

  const showImageList = movies.length > 0

  return (
    <div>
      <SearchBar onSearch={handleFormSubmit} />
      <MovieList movies={movies} location={location} />

      {showImageList && (
        <Button onClick={onLoadMoreBtn} aria-label="add contact" />
      )}
    </div>
  )
}