import { act, renderHook } from '@testing-library/react';
import { useMovieStore} from './useMovieStore';
import { vi } from 'vitest';

const mockSuccess = {
  results: [{ id: 1, title: 'Inception', poster_path: '/in.jpg', overview: 'A dream...' }],
};

describe('useMovieStore integration', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockSuccess)
    });
  });

  it('fetches and sets movies correctly', async () => {
    const { result } = renderHook(() => useMovieStore());
    act(() => result.current.setQuery('Inception'));

    await act(() => result.current.fetchMovies());

    expect(result.current.loading).toBe(false);
    expect(result.current.movies).toEqual(mockSuccess.results);
    expect(result.current.error).toBeNull();
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('search/movie?'));
  });

  it('handles fetch failure', async () => {
    (fetch as vi.Mock).mockRejectedValueOnce(new Error('fail'));

    const { result } = renderHook(() => useMovieStore());
    act(() => result.current.setQuery('FailMovie'));

    await act(() => result.current.fetchMovies());

    expect(result.current.error).toBe('Failed to fetch movies.');
    expect(result.current.loading).toBe(false);
  });
});
