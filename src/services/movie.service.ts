import { movie_mocks } from "../assets/data/movie_mocks";
import { Movie } from "../models/movie.model";

//const moviesUrl = 'http://localhost:5000/movies';
 

export function discoverMovies(): Promise<Movie[]> {
    return new Promise((resolve) => {
        resolve(movie_mocks);
    });
    
//   return fetch(
//     `${moviesUrl}`
//   )
//     .then((res) => { return res.json()})
//     .catch((_) => {
//       return [];
//     });
}






