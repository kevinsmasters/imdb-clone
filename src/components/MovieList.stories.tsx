import type { Meta, StoryObj } from '@storybook/react';
import MovieList from './MovieList';
import { useMovieStore } from '../store/useMovieStore';

const meta: Meta<typeof MovieList> = {
  title: 'Components/MovieList',
  component: MovieList,
};

export default meta;
type Story = StoryObj<typeof MovieList>;

export const Default: Story = {
  render: () => {
    useMovieStore.setState({
      movies: [
        {
          id: 1,
          title: 'Inception',
          poster_path: '/inception.jpg',
          overview: 'A mind-bending thriller.',
        },
        {
          id: 2,
          title: 'The Matrix',
          poster_path: '/matrix.jpg',
          overview: 'Virtual reality meets rebellion.',
        },
      ],
    });
    return <MovieList />;
  },
};
