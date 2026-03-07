import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetail } from "../api/tmdb.js";

function MovieDetail() {
  const { id } = useParams();          
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetail(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />

      <p>
        <strong>평점:</strong> ⭐ {movie.vote_average}
      </p>

      <p>
        <strong>개봉일:</strong> {movie.release_date}
      </p>

      <p>
        <strong>줄거리:</strong>
      </p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;