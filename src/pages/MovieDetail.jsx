// src/pages/MovieDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetail({ movie }) {
  if (!movie) return <div>Loading...</div>;

  return (
    <div style={{ display: "flex", gap: "40px", padding: "40px" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="300"
      />

      <div>
        <h1>{movie.title}</h1>
        <p><strong>개봉일:</strong> {movie.release_date}</p>
        <p><strong>상영시간:</strong> {movie.runtime}분</p>
        <p><strong>평점:</strong> {movie.vote_average}</p>
        <p>
          <strong>장르:</strong>{" "}
          {movie.genres && movie.genres.map(g => g.name).join(", ")}
        </p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

// wrapper: params 받아 fetch 후 MovieDetail에 전달
export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=ko-KR`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  return <MovieDetail movie={movie} />;
}
