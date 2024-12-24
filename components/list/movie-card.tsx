import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUpIcon } from "lucide-react";
import { Movie } from "@/types/types";
import Image from "next/image";

export default function MovieCard({
  movie,
}: Readonly<{
  movie: Movie;
}>) {
  //   const backgroundImageStyle = {
  //     backgroundImage: 'url(
  //     https://media.geeksforgeeks.org/wp-content/uploads/20240523121650/React1.png)',
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //     height: '100vh',
  //     color: 'white',
  //     margin: 0,
  //     padding: 0,
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  // };
  return (
    <Card>
      <CardHeader>
        <Image
          src={
            "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path ||
            movie.poster_path
          }
          alt={`${movie.title} poster`}
          width={500}
          height={300}
          priority={true}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{movie.title}</CardTitle>
        <CardDescription className="flex items-center gap-6 py-3">
          <ThumbsUpIcon />
          {movie.vote_average}
        </CardDescription>
        <p className="line-clamp-3">{movie.overview}</p>
      </CardContent>
      <CardFooter>
        <p>{movie.release_date}</p>
      </CardFooter>
    </Card>
  );
}
