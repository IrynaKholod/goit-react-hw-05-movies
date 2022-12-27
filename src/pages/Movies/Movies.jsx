import PropTypes from 'prop-types';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from '../../Api/Api';
import { TrendsList, Poster } from '../Home/Home.styled';
import { Loader } from '../../components/Loader/Loader';
import { Container } from '../Layout/Layout.syled';
import { SyledLink } from './Movies.syled';
import noImage from '../../image/noImage.jpg';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function getMoviesBySearch() {
      if (!query) {
        return;
      }
      setIsLoading(true);
      try {
        await searchMovies(query).then(responce => {
          if (responce.total_results === 0) {
            return Promise.reject(new Error(`No movies with word "${query}"`));
          }
          setMoviesList(p => (p = responce.results));
          setIsLoading(false);
        });
      } catch (error) {
        console.log('Error');
      }
    }

    getMoviesBySearch();
  }, [query]);

  const FindeMovie = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <Container>
      <SearchBox onChange={FindeMovie} value={query} />
      <TrendsList>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <SyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <Poster
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                    : noImage
                }
                alt={movie.original_title}
              />
              <h3>{movie.original_title}</h3>
            </SyledLink>
          </li>
        ))}
      </TrendsList>
      {isLoading && <Loader />}
    </Container>
  );
};

Movies.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.string),
};

export default Movies;
