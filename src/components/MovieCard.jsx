import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  // TMDB 이미지 서버 기본 주소
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <Link to={`/detail/${movie.id}`}>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded overflow-hidden hover:shadow-xl transition h-full">
        <img 
          // movie.poster_path가 있으면 API 이미지를, 없으면 빈 이미지를 보여줍니다.
          src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} 
          alt={movie.title} 
          className="w-full h-72 object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg truncate">{movie.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{movie.release_date || '개봉일 정보 없음'}</p>
        </div>
      </div>
    </Link>
  );
}