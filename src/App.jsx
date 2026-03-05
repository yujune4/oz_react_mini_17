import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MovieDetailPage from "./pages/MovieDetail"; // wrapper 사용

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="detail/:id" element={<MovieDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;