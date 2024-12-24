import { MoviesResponse, Movie } from "../types/types";
async function getMovies({
  url,
  options,
}: {
  url: string;
  options: RequestInit;
}) {
  console.log("Started fetching data");
  const data: MoviesResponse = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => {
      throw Error(err);
    });
  return data;
}

async function getMovie({
  url,
  options,
}: {
  url: string;
  options: RequestInit;
}) {
  console.log("Started fetching data");
  const data: Movie = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => {
      throw Error(err);
    });
  return data;
}

export { getMovies, getMovie };
