type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
};

type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type { Movie, MoviesResponse };
