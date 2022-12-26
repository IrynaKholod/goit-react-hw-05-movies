import { getMovieReviews } from '../../Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [reviews, setRevievs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      setIsLoading(true);
      try {
        await getMovieReviews(movieId).then(responce => {
          if (!responce.results) {
            return Promise.reject(new Error('No reviews'));
          }
          setRevievs(responce.results);
        });
      } catch (err) {
        console.log('Error');
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <ul>
      {Object.values(reviews).map(({ content, author, id }) => (
        <li key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
      {isLoading && <Loader />}
    </ul>
  );
};
