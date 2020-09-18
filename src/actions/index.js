import { BOOKS_REQUESTED, BOOKS_LOADED } from '../action-types';


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

export {
    booksRequested,
    booksLoaded,
};