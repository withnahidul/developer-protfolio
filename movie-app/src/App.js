import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieLoad></MovieLoad>
    </div>
  );
}
function MovieLoad() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`https://movie-task.vercel.app/api/popular?page=1`)
      .then(res => res.json())
      .then(data => console.log)

  }, [])
  return (
    <div>
      <h1>Show Movie!!!!</h1>
    </div>
  )
}
export default App;
