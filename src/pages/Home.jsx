import { useState } from "react";
import MovieCard from "../components/MovieCard";
import movieListData from "../data/movieListData.json";

function Home() {
  const [movies] = useState(movieListData.results);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {movies.map((m) => (
        <MovieCard
          key={m.id}
          poster={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
          title={m.title}
          rating={m.vote_average}
        />
      ))}
    </div>
  );
}

export default Home;