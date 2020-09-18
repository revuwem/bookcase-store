import { BOOKS_REQUESTED, BOOKS_LOADED, BOOKS_LOADING_ERROR } from '../action-types';


const booksRequested = () => {
    return {
        type: BOOKS_REQUESTED
    }
};

const booksLoaded = (newBooks) =>{
    return {
        type: BOOKS_LOADED,
        payload: newBooks
    };
};

const booksLoadingError = (error) =>{
    return {
        type: BOOKS_LOADING_ERROR,
        payload: error
    }
}

export {
    booksRequested,
    booksLoaded,
    booksLoadingError
};