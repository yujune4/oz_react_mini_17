import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function MovieList() {

  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const token = import.meta.env.VITE_TMDB_API_TOKEN;

  useEffect(() => {

    const url = query
      ? `https://api.themoviedb.org/3/search/movie?query=${query}&language=ko-KR`
      : "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {

        const filteredMovies = data.results.filter(
          (movie) => movie.adult === false
        );

        setMovies(filteredMovies);

      })
      .catch((error) => console.error(error));

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