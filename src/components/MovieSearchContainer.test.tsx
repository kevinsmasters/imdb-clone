import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useMovieStore } from '../store/useMovieStore';
import MovieSearchContainer from './MovieSearchContainer';
import { vi } from 'vitest';

// Mock the actual store methods
vi.mock('../store/useMoveiStore', async () => {
  const actual = await vi.importActual('../store/useMovieStore');
  return {
    ...actual,
    useMovieStore: vi.fn(),
  };
});


describe('MovieSearchContainer', () => {
  const mockFetchMovies = vi.fn();
  const mockSetQuery = vi.fn();

  beforeEach(() => {
    (useMovieStore as unknown as vi.Mock).mockReturnValue({
      query: '',
      setQuery: mockSetQuery,
      fetchMovies: mockFetchMovies,
      loading: false,
      error: null,
    });
  });

  it('renders input and button', () => {
    render(<MovieSearchContainer />);
    expect(screen.getByPlaceholderText(/search movies/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/search/i);
  });

  it('calls setQuery when typing', async () => {
    render(<MovieSearchContainer />);
    await userEvent.type(screen.getByPlaceholderText(/search movies/i), 'matrix');
    expect(mockSetQuery).toHaveBeenCalled();
  });

  it('calls fetchMovies on submit', async () => {
    render(<MovieSearchContainer />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockFetchMovies).toHaveBeenCalled();
  });
});
