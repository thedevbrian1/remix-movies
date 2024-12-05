import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  let id = params.id;
  let res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E1ODczYjUyYjAzNzgzMzc2NWI3OTFhZTIxODMyZCIsIm5iZiI6MTcxMDIzMDIzNC44NDMwMDAyLCJzdWIiOiI2NWYwMGFkYTFmNzQ4YjAxODQ1MWE2NDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WECXlO6pMlGSj_UfPJ3DzJkmSol1ArYgdmKneIhi174",
    },
  });

  let movie = await res.json();

  return movie;
}

export default function Movie() {
  let movie = useLoaderData();
  console.log({ movie });
  return (
    <main className="max-w-6xl mx-auto mt-8">
      <h1 className="font-semibold text-3xl">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Image of ${movie.title}`}
        className="w-full h-96 object-cover mt-8 rounded-md"
      />
      <p className="mt-8 text-gray-300">{movie.overview}</p>
    </main>
  );
}
