import { render, screen } from '@testing-library/react';
import { useMovieStore } from '../store/useMovieStore';
import MovieList from './MovieList';
import { vi } from 'vitest';

vi.mock('../store/useMovieStore', () => ({
  useMovieStore: vi.fn(),
}));

const mockMovies = [
  { id: 1, title: 'Inception', poster_path: '/inception.jpg', overview: 'Dreams within dreams.' },
  { id: 2, title: 'The Matrix', poster_path: '/matrix.jpg', overview: 'Welcome to the real world.' },
];

describe('MovieList', () => {
  beforeEach(() => {
    (useMovieStore as vi.Mock).mockReturnValue(mockMovies);
  });
  
  it('renders movie cards for each movie', () => {
    render(<MovieList />);
    expect(screen.getByText(/Inception/i)).toBeInTheDocument();
    expect(screen.getByText(/the Matrix/i)).toBeInTheDocument();
  });
});

it('displays a message if no movies found after search', () => {
  (useMovieStore as vi.Mock).mockImplementation((selector) =>
    selector({
      movies: [],
      hasSearched: true,
      loading: false,
      error: null,
      query: '',
      setQuery: vi.fn(),
      fetchMovies: vi.fn(),
    })
  );

  render(<MovieList />);
  expect(screen.getByText(/no movies found/i)).toBeInTheDocument();
});
