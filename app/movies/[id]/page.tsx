"use client";
import { useEffect, useState, use } from "react";
import Image from "next/image";
import { getMovie } from "@/utils/fetchData";
import { Movie } from "@/types/types";
import { Separator } from "@/components/ui/separator";

interface MoviePageProps {
  readonly params: {
    id: number;
  };
}
const API_KEY = process.env.API_KEY;
export default function MoviePage({ params }: Readonly<MoviePageProps>) {
  const { id } = use(params);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const [movie, setMovie] = useState<Movie>();
  console.log(id);
  useEffect(() => {
    const options = {
      next: {
        revalidate: 5,
      },
    };
    getMovie({ url, options }).then((data) => {
      setMovie(data);
    });
  }, [url]);

  return (
    <div className="bg-gradient-to-tr from-red-300 to-rose-500">
      <div className="container mx-auto p-4 flex flex-col items-center">
        {movie && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-1/3 rounded-lg shadow-lg"
            width={500}
            height={750}
            priority={true}
          />
        )}
        <h1 className="text-4xl font-bold mb-4">{movie?.title}</h1>
      </div>
      <Separator className="mt-4 py-1 bg-gradient-to-r from-red-600 to-rose-600" />
      <div className="container mx-auto p-4">
        <h3 className="text-2xl font-bold mb-4 ml-4">Overview</h3>
        <p className="text-lg mb-4 ml-4">{movie?.overview}</p>
        <div className="ml-4">
          <p>
            <strong>Release Date:</strong> {movie?.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie?.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}
