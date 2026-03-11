import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPopularMovies } from "../api/tmdb.js";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    // 배경색이 안 보일 수 있으니 인라인 스타일로 강제 지정
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
          인기 영화 목록
        </h1>

        {/* 반응형을 빼고 grid-cols-6만 남겨서 강제로 6개를 만듭니다 */}
        <div className="grid grid-cols-6 gap-4">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            >
              <div style={{ position: 'relative', width: '100%', paddingTop: '150%' }}>
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h2 style={{ fontSize: '13px', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '4px' }}>
                  {movie.title}
                </h2>
                <p style={{ fontSize: '10px', color: '#9ca3af', marginBottom: '12px' }}>
                  {movie.release_date}
                </p>

                <Link
                  to={`/detail/${movie.id}`}
                  style={{ marginTop: 'auto', display: 'block', width: '100%', backgroundColor: '#2563eb', color: 'white', textAlign: 'center', fontSize: '11px', padding: '8px 0', borderRadius: '6px', textDecoration: 'none' }}
                >
                  상세보기
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}