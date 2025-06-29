import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';

const sampleMovie = {
  id: 1,
  title: 'Inception',
  poster_path: '/inception.jpg',
  overview: 'A mind-bending thriller about dream invasion',
};

describe('MovieCard', () => {
  it('renders movie title and overview', () => {
    render(<MovieCard movie={sampleMovie} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', expect.stringContaining(sampleMovie.poster_path));
    expect(img).toHaveAttribute('alt', sampleMovie.title);
  })
})