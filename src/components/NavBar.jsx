import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

function Navbar() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearch.trim() !== "") {
      navigate(`/search?query=${debouncedSearch}`);
    }
  }, [debouncedSearch, navigate]);

  return (
    <nav>
      <input
        type="text"
        placeholder="영화 검색"
        value={search}
        onChange={handleChange}
      />
    </nav>
  );
}

export default Navbar;