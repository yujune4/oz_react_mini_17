import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* 1. NavBar를 여기에 둡니다. */}
      <NavBar /> 

      {/* 2. NavBar가 상단 고정(fixed)이라면 pt-20을 줘서 본문을 아래로 내려야 합니다. */}
      <main className="pt-20"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </main>
    </div>
  );
}