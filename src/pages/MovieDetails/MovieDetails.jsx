import PropTypes from 'prop-types';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getMovieDetails } from '../../Api/Api';
import {
  FilmContainer,
  InfoContainer,
  AdditionalContainer,
  SyledLink,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';
import noImage from '../../image/noImage.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState('false');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchMovie() {
      setIsLoading('true');
      try {
        await getMovieDetails(movieId).then(responce => {
          setMovie(responce);
          setIsLoading('false');
        });
      } catch (err) {
        console.log('aaaaa');
      }
    }
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const {
    title,
    name,
    release_date,
    genres,
    overview,
    vote_average,
    poster_path,
    tagline,
  } = movie;

  return (
    <>
      {isLoading === 'true' && <Loader />}
      <div>
        <SyledLink to={backLinkHref}>Go back</SyledLink>
        <FilmContainer>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : noImage
            }
            alt={tagline}
            width="300"
          />
          <InfoContainer>
            <h3>
              {title ?? name}
              <span>
                {release_date && ` (${new Date(release_date).getFullYear()})`}
              </span>
            </h3>
            <p>
              <b>User score:</b>
              {` ${Math.ceil(Number(vote_average) * 10)}%`}
            </p>
            <p>
              <b>Overview:</b> {overview}
            </p>
            <p>
              <b>Genres:</b> {genres.map(genre => genre.name).join(', ')}
            </p>
          </InfoContainer>
        </FilmContainer>
        <h3>Additional information</h3>
        <AdditionalContainer>
          <li>
            <Link to="cast" relative="route" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" relative="route" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </AdditionalContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.string),
};
export default MovieDetails;
