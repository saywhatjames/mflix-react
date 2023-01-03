import { Awards } from "./awards.model";
import { Imdb } from "./imdb.model";
import { Tomatoes } from "./tomatoes.model";

export interface Movie {
    tomatoes?: Tomatoes;
    genres: Array<string>;
    cast?: Array<string>;
    languages?: Array<string>;
    directors?: Array<string>;
    countries?: Array<string>;
    _id: string;
    plot?: string;
    runtime?: number;
    poster?: string;
    title?: string
    lastupdated?: string;
    awards?: Array<Awards>;
    year?: number;
    imdb?: Imdb;
    type?: string;
    lasupdated?: string;
    rated?: string;
    fullplot?: string;
    released?: string;
    writers?: Array<string>;
    num_mflix_comments?: number;
    name?: string,
    message?: string
}
   

  