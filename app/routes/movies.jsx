import { Link, useLoaderData } from "@remix-run/react";
import { MovieCard } from "../components/MovieCard";
import { Filters } from "../components/Filters";

export function meta() {
  return [
    { title: "Movies | Movieflix" },
    { name: "description", content: "Catch up with all your favourite movies" },
  ];
}

export async function loader() {
  let [movieRes, genresRes] = await Promise.all([
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E1ODczYjUyYjAzNzgzMzc2NWI3OTFhZTIxODMyZCIsIm5iZiI6MTcxMDIzMDIzNC44NDMwMDAyLCJzdWIiOiI2NWYwMGFkYTFmNzQ4YjAxODQ1MWE2NDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WECXlO6pMlGSj_UfPJ3DzJkmSol1ArYgdmKneIhi174`,
      },
    }),
    fetch("https://api.themoviedb.org/3/genre/movie/list", {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E1ODczYjUyYjAzNzgzMzc2NWI3OTFhZTIxODMyZCIsIm5iZiI6MTcxMDIzMDIzNC44NDMwMDAyLCJzdWIiOiI2NWYwMGFkYTFmNzQ4YjAxODQ1MWE2NDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WECXlO6pMlGSj_UfPJ3DzJkmSol1ArYgdmKneIhi174",
      },
    }),
  ]);

  let movies = await movieRes.json();
  let genres = await genresRes.json();

  return { movies, genres };
}

export default function Movies() {
  let { movies, genres } = useLoaderData();
  console.log({ movies });
  console.log({ genres });

  return (
    <main className="flex">
      <Filters genres={genres} />
      <div className="px-4 lg:px-12 py-4">
        {/* Movies */}
        <h1 className="font-semibold text-4xl">Movies</h1>

        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {movies.results.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
