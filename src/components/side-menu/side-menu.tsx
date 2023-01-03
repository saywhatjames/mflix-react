import { Button } from "@chakra-ui/react";
import React from "react";
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/core.state";
import { toggleMenuClicked } from "../../store/menu.actions";
import { filterMoviesByGenre, resetMoviesFilter } from "../../store/movies.actions";
import './side-menu.scss';

export const SideMenu = () => {
    const isMenuOpen: boolean = useSelector(
        (state: State) => state.menu.isMenuOpen
    )

    const genres = ["All", "Action", "Crime", "Mystery", "Documentary", "Thriller", "Sport", "Short", "Drama", "Fantasy", "Western", "Comedy", "Family", "Romance", "Adventure", "War", "Animation", "Short", "Horror", "History"]

    const dispatch: Dispatch<any> = useDispatch()

    const setGenre = React.useCallback(
        (genre: string) => {
            if (genre === 'All') dispatch(resetMoviesFilter())
            else dispatch(filterMoviesByGenre(genre))
            dispatch(toggleMenuClicked())
        },
        [dispatch]
    )

    return (
        <div className={`side-menu ${isMenuOpen ? 'is-open' : ''}`}>
            {genres.map((genre, i) => (
                <Button colorScheme="whiteAlpha" color="white" variant='ghost' key={i} onClick={() => setGenre(genre)}>{genre}</Button>
            ))}
        </div>
    );
};

