import { useEffect, useState } from "react";

function MovieList() {

    const [movies, setMovies] = useState([]);

    const token = import.meta.env.VITE_TMDB_API_TOKEN;

    useEffect(() => {

        fetch("https://api.themoviedb.org/3/movie/popular", {
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

    }, []);

    return (
      <div>
        <h2>Popular Movies</h2>

        {movies.map((movie) => (
          <div key={movie.id}>
            {movie.title}
          </div> 
        ))}
      </div>
    )
}

export default MovieList;