
import './App.css'
import MovieSearchContainer from './components/MovieSearchContainer';
import MovieList from './components/MovieList';

function App() {

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Movie Search</h1>
      <MovieSearchContainer />
      <MovieList />
    </div>
  )
}

export default App
