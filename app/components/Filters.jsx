export function Filters({ genres }) {
  return (
    <div className="bg-[#353941] w-80 min-h-screen p-4">
      <h2 className="text-xl font-semibold">Genres</h2>
      <ul className="mt-8 space-y-4">
        {genres.genres.map((item) => (
          <li
            key={item.id}
            className="hover:text-orange-300 transition ease-in-out duration-300"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
