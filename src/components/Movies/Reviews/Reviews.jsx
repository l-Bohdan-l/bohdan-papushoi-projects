import { fetchMovieReviews } from "../../../services/fetchMovies";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Status from "../../../Constants";

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [id, setId] = useState(movieId);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchMovieReviews(id)
      .then(setReviews)
      .catch((error) => setError(error))
      .finally(() => setStatus(Status.RESOLVED));
  }, [id]);
  // console.log('reviews', reviews)

  return (
    <div>
      {status === Status.PENDING && <h1>Loading...</h1>}
      {status === Status.RESOLVED && reviews && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {status === Status.REJECTED && <h1>{error.message}</h1>}
    </div>
  );
}

export default Reviews;
