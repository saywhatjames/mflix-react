import { MenuState } from "./menu.reducer";
import { MoviesState } from "./movies.reducer";

export interface State {
    movies: MoviesState;
    initialMoviesState: MoviesState;
    menu: MenuState
}