import type { Meta, StoryObj } from '@storybook/react';
import MovieCard from './MovieCard';

const meta: Meta<typeof MovieCard> = {
  title: 'Components/MovieCard',
  component: MovieCard,
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

export const Default: Story = {
  args: {
    movie: {
      id: 1,
      title: 'Inception',
      poster_path: '/inception.jpg',
      overview: 'A mind-bending thriller about dream invasion and layered realities.',
    },
  },
};

export const NoImage: Story = {
  args: {
    movie: {
      id: 2,
      title: 'Unknown Title',
      poster_path: '',
      overview: 'No image is available for this film.',
    },
  },
};
