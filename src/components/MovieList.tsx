import { useMovieStore } from '../store/useMovieStore';
import MovieCard from './MovieCard';

export default function MovieList() {
  const movies = useMovieStore((state) => state.movies);
  const hasSearched = useMovieStore((state) => state.hasSearched);
  const loading = useMovieStore((state) => state.loading);

  if (!hasSearched) return null;

  return !loading && movies.length === 0 ? (
  <p className="text-center text-gray-500 mt-8">No movies found for your search.</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
