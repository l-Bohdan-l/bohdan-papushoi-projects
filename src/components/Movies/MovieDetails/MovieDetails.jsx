import { fetchMovieDetails } from "../../../services/fetchMovies";
import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Status from "../../../Constants";
import { ColorRing } from "react-loader-spinner";
import {
  Button,
  MovieDetailsWrapper,
  MovieImage,
  MovieTitle,
  GenresStyled,
  AdditionalInfoList,
  AdditionalInfoItem,
} from "./MovieDetails.styled";
import { Transition } from "react-transition-group";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState(movieId);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const location = useLocation();
  // console.log("location movie", location);
  const backLinkRef = useRef(location.state?.from ?? "/movie-gallery");
  const transitionDuration = 300;

  useEffect(() => {
    // console.log("useEffect");
    setStatus(Status.PENDING);
    fetchMovieDetails(id)
      .then(setMovie)
      .catch((error) => setError(error))
      .finally(() => setStatus(Status.RESOLVED));
    // console.log("useEffect");
  }, [id]);

  // console.log("movieId", movieId, "id", id);
  // console.log("movie", movie);
  // const { original_title, poster_path, overview, genres, vote_average } = movie;
  return (
    <section>
      <Transition
        in={status === Status.RESOLVED && movie}
        timeout={transitionDuration}
      >
        {(state) => (
          <div
            style={{
              opacity: state === "exited" ? 0 : 1, // початкова прозорість: 0, якщо state === 'exited', і 1 у протилежному випадку
              transition: `opacity ${transitionDuration}ms ease-in-out`, // ефект переходу прозорості
            }}
          >
            <Link to={backLinkRef.current}>
              <Button type="button">Go back</Button>
            </Link>
            {status === Status.PENDING && (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{
                  display: "block",
                  margin: "0 auto",
                }}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            )}
            {status === Status.RESOLVED && movie && (
              <>
                <MovieDetailsWrapper>
                  <MovieImage
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                  <div>
                    <MovieTitle>{movie.original_title}</MovieTitle>
                    <p>User score: {movie.vote_average} </p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <GenresStyled>
                      {movie.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                    </GenresStyled>
                  </div>
                </MovieDetailsWrapper>
                <h4>Additional information</h4>
                <AdditionalInfoList>
                  <AdditionalInfoItem>
                    <Link to="cast" preventScrollReset={true}>
                      Cast
                    </Link>
                  </AdditionalInfoItem>
                  <AdditionalInfoItem>
                    <Link to="reviews" preventScrollReset={true}>
                      Reviews
                    </Link>
                  </AdditionalInfoItem>
                </AdditionalInfoList>
              </>
            )}
            {status === Status.REJECTED && <h1>{error.message}</h1>}
          </div>
        )}
      </Transition>
    </section>
  );
};

export default MovieDetails;
