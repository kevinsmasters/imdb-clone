import { create } from 'zustand';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

type MovieStore = {
  query: string;
  movies: Movie[];
  loading: boolean;
  error: string | null;
  setQuery: (query: string) => void;
  fetchMovies: () => Promise<void>;
};

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const useMovieStore = create<MovieStore>((set, get) => ({
  query: '',
  movies: [],
  loading: false,
  error: null,
  setQuery: (query) => set({ query }),

  fetchMovies: async () => {
    const { query } = get();
    set({ loading: true, error: null });

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      if (data.results) {
        set({ movies: data.results, loading: false });
      } else {
        throw new Error('unexpected response');
      }
    } catch (err) {
      set({ error: 'Failed to fetch movies.', loading: false })
      console.log(`error: ${err}`);
    }
  },
}));
