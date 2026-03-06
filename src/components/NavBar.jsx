// src/components/NavBar.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search?query=${search}`);
      setSearch("");
    }
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#222",
      color: "white"
    }}>
      {/* 로고 */}
      <div style={{ fontWeight: "bold", fontSize: "24px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>MyMovies</Link>
      </div>

      {/* 검색창 */}
      <form onSubmit={handleSearch} style={{ flex: 1, margin: "0 20px" }}>
        <input
          type="text"
          placeholder="영화 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "6px 10px",
            borderRadius: "4px",
            border: "none"
          }}
        />
      </form>

      {/* 로그인 / 회원가입 버튼 */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/login">
          <button style={{ padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}>
            로그인
          </button>
        </Link>
        <Link to="/signup">
          <button style={{ padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}>
            회원가입
          </button>
        </Link>
      </div>
    </nav>
  );
}