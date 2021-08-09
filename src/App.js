import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import { GalleryLoader } from "./components/Loader/Loader";
const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage" /* webpackChunkName: "movies -page" */)
);
const NoteFoundPage = lazy(() =>
  import("./pages/NoteFoundPage" /* webpackChunkName: "not -found-view" */)
);

function App() {
  return (
    <Container>
      <ToastContainer />
      <AppBar />
      <Suspense
        fallback={
          <h1>
            <GalleryLoader />
          </h1>
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NoteFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
