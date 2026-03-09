import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetail } from "../api/tmdb";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetail(id).then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />

      <p>⭐ {movie.vote_average}</p>

      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;