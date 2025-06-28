import type { Meta, StoryObj } from '@storybook/react';
import MovieSearchContainer from './MovieSearchContainer';
import { useMovieStore } from '../store/useMovieStore';

const meta: Meta<typeof MovieSearchContainer> = {
  title: 'Components/MovieSearchContainer',
  component: MovieSearchContainer,
};

export default meta;

type Story = StoryObj<typeof MovieSearchContainer>;

export const Default: Story = {
  render: () => <MovieSearchContainer />,
};

export const Loading: Story = {
  render: () => {
    useMovieStore.setState({ loading: true });
    return <MovieSearchContainer />;
  },
};

export const ErrorState: Story = {
  render: () => {
    useMovieStore.setState({ error: 'Oops! Failed to load movies.' });
    return <MovieSearchContainer />;
  },
};
