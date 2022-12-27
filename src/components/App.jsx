import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../pages/Layout/Layout';

const Home = lazy(() => import ('../pages/Home/Home'))
const Movies = lazy(()=> import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/MovieDetails/Cast'));
const Reviews = lazy(() => import('../pages/MovieDetails/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
