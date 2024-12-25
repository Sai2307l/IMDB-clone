"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Movie } from "../types/types";
import Card from "@/components/list/movie-card";
import { getMovies } from "@/utils/fetchData";
import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
  const params = useSearchParams();
  const genre = params.get("genre");
  const url = `https://api.themoviedb.org/3${
    genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&language=en-US&page=1`;

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const options = {
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
      {movies.map((movie) => (
        <Link
          className="cursor-pointer"
          href={`/movies/${movie.id}`}
          key={movie.id}
        >
          <Card key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}
