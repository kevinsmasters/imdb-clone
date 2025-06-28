import type React from 'react';
import { useMovieStore } from '../store/useMovieStore';

export default function MovieSearchContainer() {
  const { query, setQuery, fetchMovies, loading, error } = useMovieStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMovies();
  };

  return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="border border-gray-300 p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading? 'searching...' : 'search'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
