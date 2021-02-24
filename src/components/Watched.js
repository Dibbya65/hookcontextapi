import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCart from '../components/MovieCart.js';

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  console.log(watched);
  return (
    <div className='movie-page'>
      <div className='container'>
        <h1 className='heading'>Watched Movies</h1>
      </div>
      {watched.length > 0 ? (
        <div className='movie-grid'>
          {watched.map((movie) => (
            <MovieCart movie={movie} type='watched' key={movie.id} />
          ))}
        </div>
      ) : (
        <h2 className='no-movies'>No movies in your watchlist</h2>
      )}
    </div>
  );
};

export default Watched;
