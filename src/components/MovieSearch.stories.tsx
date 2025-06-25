import MovieSearch from './MovieSearch';

export default {
  title: 'Components/MovieSearch',
  component: MovieSearch,
};


export const Default = () => <MovieSearch onSearch={(query) => console.log(query)} />;