import { useEffect, useState } from "react";
import { getPopularMovies } from "../data/tmdb"; // 파일 경로를 확인하세요!
import MovieCard from "../components/MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      // TMDB 결과는 data.results 안에 배열로 들어있습니다.
      setMovies(data.results || []); 
    };
    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">인기 영화 목록</h1>
      
      {/* Grid 레이아웃 적용 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}