import React from 'react';
import MovieControls from './MovieControls';

const MovieCart = ({ movie, type }) => {
  return (
    <div className='movie-card'>
      <div className='overlay'></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className='filler-poster'></div>
      )}
      <MovieControls type={type} movie={movie} key={movie.id} />
    </div>
  );
};

export default MovieCart;
