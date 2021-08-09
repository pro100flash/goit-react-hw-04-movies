import { useParams, useLocation, useHistory } from 'react-router'
import { useState, useEffect, lazy, Suspense } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { fetchMovieId } from '../../services/moviesApi'
import MoviesDetails from '../../components/MovieDetails/MovieDetails'
import { GalleryLoader }   from '../../components/Loader/Loader'
import { onErrorToast } from '../../components/OnToastError'
import s from '../../components/Button/Button.module.css'

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "cast" */),
)
const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews' /* webpackChunkName: "reviews" */),
)

export default function MovieDetailsPage() {
  const history = useHistory()
  const location = useLocation()
  const [movie, setMovie] = useState([])
  const { movieId } = useParams()
  const { url } = useRouteMatch()

  useEffect(() => {
    async function onFetchMovies() {
      try {
        const movie = await fetchMovieId(movieId)

        if (movie.length === 0) {
          throw new Error()
        }

        setMovie(movie)
      } catch (error) {
        onErrorToast()
      }
    }

    onFetchMovies()
  }, [movieId])

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/')
  }

  return (
    <>
      {movie && (
        <button type="button" className={s.Button} onClick={onGoBack}>
          Back
        </button>
      )}

      {movie && <MoviesDetails movie={movie} url={url} location={location} />}
      {movie && (
        <Suspense
          fallback={
            <h1>
              <GalleryLoader />
            </h1>
          }
        >
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>

          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </Suspense>
      )}
    </>
  )
}