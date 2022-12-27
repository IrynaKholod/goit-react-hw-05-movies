import PropTypes from 'prop-types';
import { getMovieCredits } from '../../Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { CastList } from './MovieDetails.styled';
import noImage from '../../image/noImage.jpg'

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchInfoCast() {
      setIsLoading(true);
      try {
        await getMovieCredits(movieId).then(responce => {
          if (!responce.cast) {
            return Promise.reject(new Error('No information about!'));
          }
          setCastList(responce.cast);
          setIsLoading(false);
        });
      } catch (err) {
        console.log('Error');
      }
    }
    fetchInfoCast();
  }, [movieId]);

  return (
    <>
      <CastList>
        {Object.values(castList).map(
          ({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : noImage
                }
                alt={name}
                loading="lazy"
                width={120}
                height={180}
              />
              <h4>{name}</h4>
              <p> Character: {character}</p>
            </li>
          )
        )}
      </CastList>
      {isLoading && <Loader />}
    </>
  );
};

Cast.propTypes = {
  castList: PropTypes.arrayOf(PropTypes.string)
};
export default Cast;
