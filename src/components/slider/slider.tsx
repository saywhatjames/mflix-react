import { Flex } from '@chakra-ui/react';
import { Dispatch } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Movie as MovieModel } from '../../models/movie.model';
import { State } from '../../store/core.state';
import { getMovies, slideMovieSliderLeft, slideMovieSliderRight } from '../../store/movies.actions';
import { Movie } from '../movie/movie';
import "./slider.scss"


export const Slider = () => {

  //const slider = document.getElementById('slider')!;

  const dispatch: Dispatch<any> = useDispatch();

  //create an offset interval for managing slider transition


  //variables for arrowChanging
  let [showLeftArrow, setLeftArrow] = useState(false);
  let [showRightArrow, setRightArrow] = useState(false);

  const movies: MovieModel[] | undefined = useSelector(
    (state: State) => {
      return state.movies.filteredMovies
    }
  )

  const offset: number = useSelector(
    (state: State) => {
      return state.movies.sliderOffset
    }
  )

  const moviesStatus: string = useSelector((state:State) => state.movies.status)


  const offsetInterval = 500;

  const slide = React.useCallback(
    (_direction: string) => {
      if (_direction === 'left') {
        dispatch(slideMovieSliderLeft(offsetInterval))
      } else {
        dispatch(slideMovieSliderRight(offsetInterval))
      }

      
    },
    [offset, dispatch]
  )

  const mouseOverSlider = React.useCallback(
    () => {
      const clientWidth = document.getElementById('slider')?.clientWidth;
      const scrollWidth = document.getElementById('slider')?.scrollWidth;
      setLeftArrow(showLeftArrow = offset < 0 ? true : false);
      if (scrollWidth && clientWidth) {
        setRightArrow(showRightArrow = clientWidth - offset < scrollWidth ? true : false)
      }
    },
    [offset, dispatch]
  )



  useEffect(() => {
    if (moviesStatus === 'idle') {
      dispatch(getMovies());
    }

    mouseOverSlider();
  }, [offset, moviesStatus, dispatch])


  return (
    // <Flex alignItems='center'>
    <div className='position-relative overflow-hidden'
    onMouseLeave={() => {setLeftArrow(false); setRightArrow(false)}}
    >
      <div id='slider' className="d-flex slider"
        onMouseOver={() => mouseOverSlider()} 
        style={{ transform: `translateX(${offset}px)` }}>
        {movies?.map((movie) => (
          <Movie
            key={movie._id}
            _id={movie._id}
            genres={movie.genres}
            poster={movie.poster}
            languages={movie.languages}
            tomatoes={movie.tomatoes}
          />
        ))}
      </div>
      {showLeftArrow && <a onClick={() => slide('left')} className="arrow left">‹</a>}
      {showRightArrow && <a onClick={() => slide('right')} className="arrow right">›</a>}
    </div>



    //</Flex>
  );
};

