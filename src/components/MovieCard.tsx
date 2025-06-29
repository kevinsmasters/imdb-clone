type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

type Props = {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return(
    <div className="bg-white shadow rounded overflow-hidden">
      <img src={posterUrl} alt={movie.title} className="w-full h-auto" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
}
