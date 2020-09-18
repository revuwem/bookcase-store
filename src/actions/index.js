import { 
    FETCH_BOOKS_REQUEST, 
    FETCH_BOOKS_SUCCESS, 
    FETCH_BOOKS_FAILURE,
    BOOK_ADDED_TO_CART } from '../action-types';


const booksRequested = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
};

const booksLoaded = (newBooks) =>{
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: newBooks
    };
};

const booksLoadingError = (error) =>{
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
}

const fetchBooks = (bookcaseService, dispatch) => () => {            
    dispatch(booksRequested());
    bookcaseService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksLoadingError(error)));
}

const bookAddedToCart = (bookId) => {
    return {
        type: BOOK_ADDED_TO_CART,
        payload: bookId
    };
};

export {
    fetchBooks,
    bookAddedToCart
};