import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Loading from './Components/Loading/Loading'
import CardMovie from './Components/CardMovie/CardMovie';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const App = () => {
  const [load, setLoad] = useState(false);
  const [input, setInput] = useState('');
  const [movie, setMovie] = useState({});

  const handleOnChange = (e) => {
    setInput(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const movieInput = input.toLocaleLowerCase();
    if (movieInput) {
      const getMovie = async () => {
        try {
          const res = await axios(`https://omdbapi.com/?t=${movieInput}&apikey=af8636e`);
          setMovie(res.data)

        } catch (error) {
          console.log(error.message);
        }
      }
      getMovie();
    }
    setInput('');
  }

  useEffect(() => {
    setLoad(true)
    setTimeout(() => setLoad(false), 1500);
  }, [])

  return (
    <div className="App">
      <Nav />
      <form className='From' onSubmit={handleOnSubmit}>
        <TextField
          id="outlined-basic"
          label="Buscar Pelicula"
          variant="outlined"
          className='TextField'
          value={input}
          onChange={handleOnChange}
        />
        <button className='btn'>Buscar</button>
      </form>

      {load ? (
        <Loading />
      ) : movie.imdbID ? (
        <CardMovie movie={movie} />
      ) : null}
    </div>
  );
}

export default App;
