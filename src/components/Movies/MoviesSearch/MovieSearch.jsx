import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesByQuery } from "../../../services/fetchMovies";
import Status from "../../../Constants";
import moviePlaceholder from "../../../images/movie_placeholder.png";
import { toast } from "react-toastify";
import {
  Input,
  Button,
  Form,
  List,
  ListItem,
  MovieTitle,
  StyledLink,
  ImageStyled,
} from "./MovieSearch.styled";
import { ColorRing } from "react-loader-spinner";

function MovieSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") ?? "";
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      return;
    }
    setStatus(Status.PENDING);
    fetchMoviesByQuery(searchQuery.toLowerCase())
      .then((res) => {
        if (res.length === 0) {
          toast.error("No results were found for your search.");
          return;
        }
        setMovies(res);
      })
      .catch((error) => setError(error))
      .finally(() => setStatus(Status.RESOLVED));
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === "") {
      toast.error("Please enter your query");
      return;
    }
    const nextParams =
      e.target.elements.query.value !== ""
        ? { search: e.target.elements.query.value }
        : {};
    setSearchParams(nextParams);
    e.currentTarget.reset();
  };

  // console.log('searchQuery', searchQuery)
  //     console.log('movies 2', movies)

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Input name="query" type="text" placeholder="Search" />
        <Button type="submit">Search</Button>
      </Form>
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
      {status === Status.RESOLVED && movies && (
        <List>
          {movies.map((movie) => {
            return (
              <ListItem key={movie.id}>
                <StyledLink to={`${movie.id}`} state={{ from: location }}>
                  <ImageStyled
                    src={
                      movie.poster_path === null
                        ? moviePlaceholder
                        : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    }
                    alt={movie.title}
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                </StyledLink>
              </ListItem>
            );
          })}
        </List>
      )}
      {status === Status.REJECTED && <p>{error.message}</p>}
    </section>
  );
}

export default MovieSearch;
