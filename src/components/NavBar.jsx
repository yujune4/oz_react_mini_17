import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '64px',
      backgroundColor: '#1f2937', // 어두운 회색 배경
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {/* 1. 로고 영역 */}
      <Link to="/" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none' }}>
        OZ MOVIES
      </Link>

      {/* 2. 중앙 검색창 영역 */}
      <div style={{ flex: 1, maxWidth: '400px', margin: '0 20px' }}>
        <input 
          type="text" 
          placeholder="영화 제목을 입력하세요..."
          style={{
            width: '100%',
            padding: '8px 12px',
            borderRadius: '4px',
            border: 'none',
            outline: 'none',
            fontSize: '14px'
          }}
        />
      </div>

      {/* 3. 로그인/회원가입 버튼 영역 */}
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>
          로그인
        </Link>
        <Link to="/signup" style={{ 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          padding: '6px 16px', 
          borderRadius: '4px', 
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          회원가입
        </Link>
      </div>
    </nav>
  );
}