import { getTrending } from '../../Api/Api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { TrendsList, HomeTitle, Poster, SyledLink } from './Home.styled';
import { Container } from 'pages/Layout/Layout.syled';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading('true');
      try {
        await getTrending().then(responce => {
          if (responce.total_results === 0) {
            return Promise.reject(new Error('No such Movie!'));
          }
          setTrendMovies(responce.results);
          setIsLoading('false');
        });
      } catch (error) {
        new Error();
        console.log('Error');
      }
    }

    fetchMovies();
  }, []);

  return (
    <Container>
      <HomeTitle>Trending today</HomeTitle>

      <TrendsList>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <SyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <Poster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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

export default Home;
