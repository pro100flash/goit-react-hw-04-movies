import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "fe3a712f0c42920a8ef2167b87d0f769";

export const fetchMovie = async (page) => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const results = await response.data.results;

  return results;
};

export const fetchMovieId = async (movie_id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );

  const results = await response.data;

  return results;
};

export const fetchMovieCredits = async (movie_id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const results = await response.data.cast;

  return results;
};

export const fetchMovieReviews = async (movie_id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  const results = await response.data.results;

  return results;
};

export const fetchMoviesSearchQuery = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&language=en&query=${searchQuery}`
  );
  const results = await response.data.results;

  return results;
};
