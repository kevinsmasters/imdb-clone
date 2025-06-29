import { useMovieStore } from '../store/useMovieStore';
import MovieCard from './MovieCard';

export default function MovieList() {
  const movies = useMovieStore((state) => state.movies);

  if (movies.length === 0) return null;

  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
