import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showMovieClicked } from "../../store/movies.actions";
import { Movie as MovieModel } from '../../models/movie.model';
import imgPlaceholder from "../../assets/images/error.png";
import React from "react";
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { Details } from "../details/details";
import './movie.scss'


export const Movie: React.FC<MovieModel> = ({
    _id,
    title,
    poster,
    genres,
    languages,
    tomatoes,
}) => {
    const dispatch: Dispatch<any> = useDispatch()

    const { isOpen, onOpen, onClose } = useDisclosure();

    const showDetails = React.useCallback(
        (_id: string) => {
            onOpen()
            dispatch(showMovieClicked(_id))
        },
        [dispatch]
    );

    return (
        <>
            <div className="d-flex flex-column cursor-pointer p-3">
                <img src={poster} onError={e => { e.currentTarget.src = imgPlaceholder; }} alt={title} onClick={() => showDetails(_id)} />
                <div className="d-flex pt-3">
                    {genres?.map((genre, i) => (<span key={i} className="genre">{genre}</span>))}
                </div>
                <div className="d-flex pt-3 accent language">
                    {languages?.map((lang, i) => (<span key={i}>{lang}</span>))}
                </div>
                {tomatoes?.critic?.rating && <div className="rating" >{tomatoes?.critic?.rating} / 10</div>}

            </div>

            <Modal onClose={onClose} size="4xl" isOpen={isOpen} isCentered>
                <ModalOverlay />

                <ModalContent>

                    <ModalCloseButton />
                    <Details></Details>

                </ModalContent>
            </Modal>

        </>
    )
}