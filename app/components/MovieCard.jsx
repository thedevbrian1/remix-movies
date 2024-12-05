export function MovieCard({ movie }) {
  return (
    <article>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Poster for ${movie.title}`}
        className="h-72 w-full object-cover rounded-md"
      />
      <h2 className="mt-4 text-xl">{movie.title}</h2>
      <p className="mt-2 text-orange-500">{movie.vote_average}</p>
    </article>
  );
}
