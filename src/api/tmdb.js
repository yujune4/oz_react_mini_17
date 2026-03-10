const token = import.meta.env.VITE_TMDB_API_TOKEN;

export const getPopularMovies = async () => {
  const response = await fetch(
    // 1. URL을 따옴표로 감싸고, 2. 뒤에 쉼표를 찍어야 합니다.
    'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=KR',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
};

export const getMovieDetail = async (id) => {
  const response = await fetch(
    // 3. 템플릿 리터럴(``) 내부에 ?를 사용하여 쿼리 파라미터를 연결합니다.
    `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&lamguage=ko-KR`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
};