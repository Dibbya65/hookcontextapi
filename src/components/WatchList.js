import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCart from '../components/MovieCart';

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <h1 className='heading'>My WatchList</h1>
      </div>
      {watchlist.length > 0 ? (
        <div className='movie-grid'>
          {watchlist.map((movie) => (
            <MovieCart movie={movie} type='watchlist' key={movie.id} />
          ))}
        </div>
      ) : (
        <h2 className='no-movies'>No movies in your watchlist</h2>
      )}
    </div>
  );
};

export default WatchList;
