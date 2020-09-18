import { BOOKS_REQUESTED, BOOKS_LOADED, BOOKS_LOADING_ERROR } from '../action-types';

const initialState = {
    books: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case BOOKS_REQUESTED:
            return {
                books: [],
                loading: true,
                error: null
            }
        case BOOKS_LOADED:
            return {
                books: action.payload,
                loading: false,
                error: null
            };
        case BOOKS_LOADING_ERROR:
            return {
                books: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    };
};

export {
    reducer
};