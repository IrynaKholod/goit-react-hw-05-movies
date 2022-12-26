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

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState('false');
  // const [error, setError] = useState(null);

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
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
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

// export const MovieDetails = ( ) =>{
// const [movie, setMovie] = useState({})
// const [isLoading, setIsLoading] = useState(false);
// const { id } = useParams();
// const location = useLocation();

// useEffect(() => {

//     async function fetchMovie () {
//       setIsLoading('true');
//       try {
//         await getMovieDetails(id).then(responce => {
//           setMovie(responce);
//           setIsLoading('false');
// });
//       } catch(err) {
//        console.log('error');
//     }
//     }
//       fetchMovie ()

//   }, [id]);

//   const {original_title, release_date, genres, overview, vote_average, poster_path, tagline } = movie;

//     return(
//         <Container>
//              <button type="button"> Go beack</button>
//              <FilmContainer>
//                 <img src={ `https://image.tmdb.org/t/p/w500${poster_path}`} alt={tagline} width="300"/>
//              <h3>{ original_title}
//             <span>{ (release_date) && ` (${new Date(release_date).getFullYear()})`}</span></h3>
//              <p>User score <span>{` ${Math.ceil(Number(vote_average)*10)}%`}</span></p>
//              <h4>Overview</h4>
//              <p>{overview}</p>

//              <h4>Genres</h4>
//              <p>{genres}</p>
//              </FilmContainer>
//              <div>
//                 <p>Additional information</p>
//                 <ul>
//                     <li><Link to={"cast"}  state={{...location.state }}>Cast</Link></li>
//                     <li>   <Link to={"riviews"} state={{...location.state}}>Reviews</Link></li>
//                 </ul>
//                 {isLoading && <Loader/>}

//              </div>
//         </Container>

//     )
// }
