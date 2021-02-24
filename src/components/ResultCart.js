import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ResultCart = ({ movie }) => {
  const {
    addMovieToWatchList,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);
  // console.log(watchlist);
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  const storedMovieWatched = watched.find((o) => o.id === movie.id);
  const watchListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className='filler-poster'></div>
        )}
      </div>
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='released-date'>
            {movie.release_date ? movie.release_date.substring(0, 4) : null}
          </h4>
        </div>
        <div className='controls'>
          <button
            className='btn'
            disabled={watchListDisabled}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add To WatchList
          </button>
          <button
            className='btn'
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;
