import MovieCard from "../components/MovieCard";

const movies = [
  { id: 1, title: "Movie 1", genre: "Action", image: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Movie 2", genre: "Drama", image: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Movie 3", genre: "Comedy", image: "https://via.placeholder.com/300x200" },
];

export default function Home() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
