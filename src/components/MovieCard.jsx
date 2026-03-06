import { Link } from "react-router-dom";

function MovieCard({ poster, title, rating }) {
  return (
    <Link to="/detail" style={{ textDecoration: "none", color: "inherit" }}>
      <div>
        <img src={poster} alt={title} width="200" />
        <h3>{title}</h3>
        <p>⭐ {rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;