import { Button } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Movie } from "../../models/movie.model"
import { State } from "../../store/core.state"
import "./details.scss"


export const Details = () => {

    const movie: Movie | undefined = useSelector(
        (state: State) => state.movies.selectedMovie
    )

    return (

        <div className="details">

            <div className="info">

                <h1>{movie?.title}</h1>

                <p className="d-flex secondary-color">
                    <span><i className="fa fa-imdb pe-2" aria-hidden="true"></i><span
                        className="pe-3">{movie?.imdb?.rating}</span></span>
                    <span className="pe-3">{movie?.runtime} mins</span>
                    <span className="pe-3">{movie?.year}</span>
                </p>

                <p>{movie?.plot}</p>

                <div className="d-flex flex-column w-100 justify-content-between field">
                    <div className="d-flex"><span className="secondary-color">Directors</span>
                        {movie?.directors?.map((director, i) => (<a key={i} href='#'>{director}</a>))}
                    </div>
                    <div className="d-flex"><span className="secondary-color">Starring</span>
                        {movie?.cast?.map((cast, i) => (<a href='#' key={i} >{cast}</a>))}</div>
                    <div className="d-flex"><span className="secondary-color">Genres</span>
                        {movie?.genres?.map((genre, i) => (<a href='#' key={i} >{genre}</a>))}</div >
                    <div className="d-flex"><span className="secondary-color">Languages</span>
                        {movie?.languages?.map((lang, i) => (<span key={i}  >{lang}</span>))}
                    </div >
                </div >

                <Button className="px-4 py-2 mt-4 d-flex justify-content-center align-items-center"><i className="fa fa-play pe-3"
                    aria-hidden="true"></i><span>Play</span></Button>

                <div className="mt-4 mb-3 fw-500">More Details</div>
                <div className="d-flex flex-column w-100 justify-content-between field">
                    <div className="d-flex"><span className="secondary-color">Writers</span> 
                    {movie?.writers?.map((writer, i) => (<a key={i}  href='#'>{writer}</a>))}
                    </div>
                    <div className="d-flex"><span className="secondary-color">Countries</span> 
                    {movie?.countries?.map((country, i) => (<span key={i} >{country}</span>))}
                    </div >
                    <div className="d-flex"><span className="secondary-color">Rating</span><span>
                        {movie?.rated}</span></div>
                </div >
            </div >

            <div className="awards">
                <div className="mt-5 mb-3  fw-500 ">Accolades and Reviews</div>
                <div className="d-flex flex-row w-100 justify-content-around">
                    <div className="d-flex align-items-center">
                        <i className="fa fa-trophy pe-3 fs-2" aria-hidden="true"></i>
                        {movie?.awards?.map((award, i) => (<div key={i}  className="d-flex">
                            <div className="d-flex flex-column pe-3 border-end me-3">
                                <span className="fw-500 fs-2 ms-auto">{award.wins}</span><span className="secondary-color">Wins</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="fw-500 fs-2">{award.nominations}</span><span
                                    className="secondary-color">Nominations</span>
                            </div>
                        </div>))}

                    </div>
                    <div className="d-flex align-items-center">
                        <i className="fa fa-film pe-3 fs-2" aria-hidden="true"></i>
                        <div className="d-flex flex-column">
                            <span className="fw-500 fs-2">{movie?.tomatoes?.viewer?.meter}%</span><span
                                className="secondary-color">Tomatometer</span>
                            <a href="#">{movie?.tomatoes?.viewer?.numReviews} Reviews</a>
                        </div>

                    </div>
                    <div className="d-flex align-items-center">
                        <i className="fa fa-imdb pe-3 fs-2" aria-hidden="true"></i>
                        <div className="d-flex flex-column">
                            <span className="fw-500 fs-2">{movie?.imdb?.rating}</span><span className="secondary-color">Rating</span>
                            <a href="#">{movie?.imdb?.votes} Votes</a>
                        </div>
                    </div>
                </div>
            </div>




            <div className="cover">
                <div className="gradient left"></div>
                <div className="gradient bottom"></div>
                <img className="w-100 h-100" src={movie?.poster} />
            </div>

        </div>

    )
}