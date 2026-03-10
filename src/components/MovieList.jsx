import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPopularMovies, searchMovies } from "../api/tmdb";

function MovieList() {

  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {

    const fetchMovies = async () => {

      let data;

      if (query) {
        data = await searchMovies(query);
      } else {
        data = await getPopularMovies();
      }

      const filteredMovies = data.results.filter(
        (movie) => movie.adult === false
      );

      setMovies(filteredMovies);
    };

    fetchMovies();

  }, [query]);

  return (
    <div>
      <h2>{query ? `Search Result: ${query}` : "Popular Movies"}</h2>

      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.title}
        </div>
      ))}
    </div>
  );
}

export default MovieList;