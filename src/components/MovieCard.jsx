import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          width: "200px",
          margin: "10px",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          backgroundColor: "#fff"
        }}
      >
        {/* 영화 포스터 */}
        {movie.poster_path ? (
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: "#ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            No Image
          </div>
        )}

        {/* 영화 정보 */}
        <div style={{ padding: "10px" }}>
          <h3 style={{ fontSize: "16px", margin: "5px 0" }}>
            {movie.title}
          </h3>
          <p style={{ margin: 0 }}>⭐ {movie.vote_average}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;