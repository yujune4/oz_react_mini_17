import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/detail/${movie.id}`}>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded overflow-hidden hover:shadow-xl transition">
        <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h2 className="font-bold text-lg">{movie.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{movie.genre}</p>
        </div>
      </div>
    </Link>
  );
}