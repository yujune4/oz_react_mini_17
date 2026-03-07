const token = import.meta.env.VITE_TMDB_API_TOKEN;

export const fetchPopularMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
};