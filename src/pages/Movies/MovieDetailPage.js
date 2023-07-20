import { Outlet } from "react-router-dom";
import MovieDetails from "../../components/Movies/MovieDetails/MovieDetails";
function MovieDetailPage() {
  return (
    <div>
      <MovieDetails />
      <Outlet />
    </div>
  );
}

export default MovieDetailPage;
