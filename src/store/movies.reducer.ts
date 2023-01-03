
import { Movie } from "../models/movie.model";
import * as MoviesActions from "./movies.actions";

export interface MoviesState {
  movies: Array<Movie>,
  filteredMovies?: Array<Movie>,
  selectedMovie?: Movie,
  sliderOffset: number,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

export const initialMoviesState = {
  movies: [],
  filteredMovies: [],
  selectedMovie: undefined,
  sliderOffset: 0,
  status: 'idle',
  error: null
} as MoviesState


const reducer = (
  state: MoviesState = initialMoviesState,
  action: any
): MoviesState => {
  switch (action.type) {
    case MoviesActions.FILTER_MOVIES_BY_GENRE:
      return {
        ...state,
        sliderOffset: 0,
        filteredMovies: state.movies.filter(m => m.genres.some(v => action.payload.includes(v)))
      }
    case MoviesActions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        filteredMovies: action.payload,
        status: 'succeeded'
      }
    case MoviesActions.RESET_MOVIES_FILTER:
      return {
        ...state,
        filteredMovies: state.movies
      }
    case MoviesActions.SHOW_MOVIE_DETAILS:
      return {
        ...state,
        selectedMovie: state.movies.find((movie) => movie._id === action.payload)
      }
    case MoviesActions.MOVIE_SLIDER_LEFT_CLICKED:
      return {
        ...state,
        sliderOffset: state.sliderOffset + action.payload
      }
    case MoviesActions.MOVIE_SLIDER_RIGHT_CLICKED:
      return {
        ...state,
        sliderOffset: state.sliderOffset - action.payload
      }
  }
  return state

}


export default reducer