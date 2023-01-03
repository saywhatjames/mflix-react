import { Dispatch } from "@reduxjs/toolkit";
import { Movie } from "../models/movie.model";
import { discoverMovies } from "../services/movie.service";


export const FILTER_MOVIES_BY_GENRE = "FILTER_MOVIES_BY_GENRE";
export const APP_LOADED = "APP_LOADED";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAIL = "FETCH_MOVIES_FAIL";
export const RESET_MOVIES_FILTER = "RESET_MOVIES_FILTER";
export const SHOW_MOVIE_DETAILS = "SHOW_MOVIE_DETAILS";
export const MOVIE_SLIDER_RIGHT_CLICKED = "MOVIE_SLIDER_RIGHT_CLICKED";
export const MOVIE_SLIDER_LEFT_CLICKED = "MOVIE_SLIDER_LEFT_CLICKED";


export type MovieAction = {
  type: string
  payload: Movie[]
}

export type DispatchType = (args: MovieAction) => MovieAction

export function appLoaded() {
  return { type: APP_LOADED }
}

export function fetchMoviesSuccess(movies: Movie[]) {
  return { type: FETCH_MOVIES_SUCCESS, payload: movies };
}

export function fetchMoviesFail(error: any) {
  return { type: FETCH_MOVIES_FAIL, payload: error };
}

export function filterMoviesByGenre(genre: string) {
  return { type: FILTER_MOVIES_BY_GENRE, payload: genre };
}

export function showMovieClicked(_id: string) {
  return { type: SHOW_MOVIE_DETAILS, payload: _id };
}

export function resetMoviesFilter() {
  return { type: RESET_MOVIES_FILTER };
}

export function slideMovieSliderRight(offsetInterval: number) {
  return { type: MOVIE_SLIDER_RIGHT_CLICKED, payload: offsetInterval  };
}

export function slideMovieSliderLeft(offsetInterval: number) {
  return { type: MOVIE_SLIDER_LEFT_CLICKED, payload: offsetInterval  };
}

export const getMovies = () => async (
  //dispatch: Dispatch<DispatchType>
  dispatch: Dispatch<any>
) => {
  try {
    const data = await discoverMovies()
    dispatch(fetchMoviesSuccess(data))
  } catch (error) {
    dispatch(fetchMoviesFail(error))

  }
}



  // export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  //   const response = await discoverMovies()
  //   return response
  // })