import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../api/tmdb";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <div>
      <h1>영화 목록</h1>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home