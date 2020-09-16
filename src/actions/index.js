import '../action_types';
import { BOOKS_LOADED } from '../action_types';


const booksLoaded = (newBooks) =>{
    return {
        type: BOOKS_LOADED,
        payload: newBooks
    };
};

export {
    booksLoaded,
};