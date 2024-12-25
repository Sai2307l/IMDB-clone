"use client";
import { useEffect, useState, use } from "react";
import { Movie } from "@/types/types";
import Card from "@/components/list/movie-card";
import { getMovies } from "@/utils/fetchData";
import Link from "next/link";

const API_KEY = process.env.API_KEY;

export default function MoviePage({
  params,
}: {
  readonly params: Promise<{ searchTerm: string }>;
}) {
  const { searchTerm } = use(params);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU0OGYxNGFkMDQwYTQ0ZTVmMGMzMzhlMWYzNGM5MiIsIm5iZiI6MTczNDc4NjYzNS41MDMsInN1YiI6IjY3NjZiZTRiOGNhNTNjYzZhNzVlMTA4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Kq8sCd5Slt7OSID0_woZ2lYvwLMS6XP2oHEfSPYZHA",
      },
      next: {
        revalidate: 5,
      },
    };
    getMovies({ url, options }).then((data) => {
      setMovies(data.results);
    });
  }, [url]);

  return (
    <div className="grid grid-cols-3 gap-4 items-stretch mx-3">
      {movies.map(
        (movie) =>
          movie && (
            <Link
              className="cursor-pointer"
              href={`/movies/${movie.id}`}
              key={movie.id}
            >
              <Card key={movie.id} movie={movie} />
            </Link>
          )
      )}
    </div>
  );
}
