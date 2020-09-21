import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    BOOK_ADDED_TO_CART,
    BOOK_REMOVED_FROM_CART,
    ALL_BOOKS_REMOVED_FROM_CART
} from '../action-types';

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 420

};


//returns book object from books array of state
const getBook = ({ books }, bookId) => {
    return books.find((book) => book.id === bookId);
}

//returns index of card item with received book's id
const getCartItemIndex = ({ cartItems }, bookId) => {
    return cartItems.findIndex((item) => item.id === bookId);
}

const updateCartItems = ({ cartItems }, item, idx) => {

    // removes items from cart
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    //adds item to cart
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    //updates item in the cart
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

const updateCartItem = (book, item = {}, quantity) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + book.price * quantity
    };
};

const updateOrder = (state, bookId, quantity) => {
    const book = getBook(state, bookId);
    const itemIndex = getCartItemIndex(state, bookId);
    const item = state.cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);
    return {
        ...state,
        cartItems: updateCartItems(state, newItem, itemIndex)
    };
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_BOOKS_REQUEST: {
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        }

        case FETCH_BOOKS_SUCCESS: {
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        }

        case FETCH_BOOKS_FAILURE: {
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        }

        case BOOK_ADDED_TO_CART: {
            return updateOrder(state, action.payload, 1);
        }

        case BOOK_REMOVED_FROM_CART: {
            return updateOrder(state, action.payload, -1);
        }

        case ALL_BOOKS_REMOVED_FROM_CART: {
            const item = state.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);
        }

        default:
            return state;
    };
};

export {
    reducer
};