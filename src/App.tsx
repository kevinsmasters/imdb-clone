
import './App.css'
import MovieSearchContainer from './components/MovieSearchContainer';
import MovieList from './components/MovieList';

function App() {

  return (
    <>
      <section className="w-full">
        <div className="w-full h-[420px] bg-[url('https://images.unsplash.com/photo-1525522819526-d571040e1607?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
        {/* <!-- Photo by '@kxvn_lx' on Unsplash --> */}
            <div>
                <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl :text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">Movie Poster Search</h1>
            </div>
            <div className="w-full mx-auto">
                <MovieSearchContainer />
            </div>
        </div>
      </section>
      <div className="p-4 max-w-6xl mx-auto">
        <MovieList />
      </div>
    </>
  )
}

export default App
