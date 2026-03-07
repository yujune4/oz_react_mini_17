import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDeatail } from ",,/api/tmdb.js;"

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDeatail(id).then(data => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>평점: {movie.vote_average}</p>
      <p>개봉일: {movie.release_date}</p>
    </div>
  );
}

export default MovieDetail;