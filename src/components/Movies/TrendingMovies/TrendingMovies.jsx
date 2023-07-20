import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../../services/fetchMovies";
import {
  Title,
  List,
  ImageStyled,
  ListItem,
  MovieTitle,
  StyledLink,
} from "./TrendingMovies.styled";
import Status from "../../../Constants";
import { ColorRing } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const TrendingMovies = function () {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(Status.PENDING);
    fetchPopularMovies()
      .then((data) => {
        setMovies(data);
        // console.log(data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(Status.RESOLVED));
  }, []);
  // console.log("movies", movies);
  return (
    <article>
      <Title>Trending Today</Title>
      {isLoading === Status.PENDING && (
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
      {isLoading === Status.RESOLVED && movies && (
        <List>
          {movies.map((movie) => (
            <ListItem key={movie.id}>
              <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
                <ImageStyled
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                {/* <TitleWrapper> */}
                <MovieTitle>{movie.title}</MovieTitle>
                {/* </TitleWrapper> */}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      )}
      {isLoading === Status.REJECTED && <h1>{error.message}</h1>}
    </article>
  );
};

export default TrendingMovies;
