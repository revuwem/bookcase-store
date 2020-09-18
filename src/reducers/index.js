import { BOOKS_REQUESTED, BOOKS_LOADED } from '../action-types';

const initialState = {
    books: [],
    loading: true
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case BOOKS_REQUESTED:
            return {
                books: [],
                loading: true
            }
        case BOOKS_LOADED:
            return {
                books: action.payload,
                loading: false
            };
        default:
            return state;
    };
};

export {
    reducer
};