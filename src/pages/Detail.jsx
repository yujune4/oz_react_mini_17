import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../api/tmdb";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getMovieDetail(id);
        setMovie(data);
      } catch (error) {
        console.error("데이터 로드 실패:", error);
      }
    };
    fetchDetail();
  }, [id]);

  if (!movie) return <div style={{ padding: '100px', textAlign: 'center' }}>로딩 중...</div>;

  return (
    <div style={{ backgroundColor: '#111', minHeight: '100vh', color: 'white', paddingTop: '64px' }}>
      
      {/* 1. 상단 이미지 영역 (배경) */}
      <div style={{ position: 'relative', width: '100%', height: '450px', overflow: 'hidden' }}>
        <img
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.4' }}
        />
        {/* 이미지 위에 제목 띄우기 */}
        <div style={{ 
          position: 'absolute', 
          bottom: '40px', 
          left: '40px', 
          right: '40px',
          zIndex: 2 
        }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 10px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {movie.title}
          </h1>
          <div style={{ display: 'flex', gap: '20px', fontSize: '18px', color: '#ccc' }}>
            <span>★ {movie.vote_average?.toFixed(1)}</span>
            <span>{movie.release_date}</span>
            <span>{movie.runtime}분</span>
          </div>
        </div>
        {/* 아래쪽 어둡게 그라데이션 (글자 잘 보이게) */}
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          height: '200px', 
          background: 'linear-gradient(to top, #111, transparent)' 
        }}></div>
      </div>

      {/* 2. 하단 줄거리 영역 (여기는 절대 안 겹칩니다) */}
      <div style={{ padding: '40px', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', borderLeft: '5px solid #3b82f6', paddingLeft: '15px' }}>
          줄거리
        </h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#ddd', wordBreak: 'keep-all' }}>
          {movie.overview || "상세 줄거리 정보가 없습니다."}
        </p>
      </div>
    </div>
  );
}