import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { Layout } from '../pages/Layout/Layout';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from '../pages/MovieDetails/Cast';
import { Reviews } from '../pages/MovieDetails/Reviews';
import { NotFound } from '../pages/NotFound/NotFound';

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
