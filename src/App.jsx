import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail"; // wrapper 사용

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;