// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.

import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '25da517c2bc168beb7d03992630b742e';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
};
