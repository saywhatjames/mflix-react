import MoviesReducer from "./movies.reducer";
import MenuReducer from "./menu.reducer";
import { combineReducers } from "@reduxjs/toolkit";


export const reducers = combineReducers({
    movies: MoviesReducer,
    menu: MenuReducer
});

