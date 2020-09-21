import {
    BOOK_ADDED_TO_CART,
    BOOK_REMOVED_FROM_CART,
    ALL_BOOKS_REMOVED_FROM_CART
} from '../action-types';


//returns book object from books array of state
const getBook = (books, bookId) => {
    return books.find((book) => book.id === bookId);
}

//returns index of card item with received book's id
const getCartItemIndex = (cartItems, bookId) => {
    return cartItems.findIndex((item) => item.id === bookId);
}

const updateCartItems = (cartItems, item, idx) => {

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

   
    const orderTotal = parseFloat(total) + book.price * quantity; 

    return {
        id,
        title,
        count: count + quantity,
        total: parseFloat(orderTotal).toFixed(2)
    };
};

    
const calculateOrderTotal = (cartItems) => {
    const orderTotal = cartItems.reduce((acc, item) => (acc+=parseFloat(item.total)), 0);
    return parseFloat(orderTotal).toFixed(2);
}

const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state;

    const book = getBook(books, bookId);
    const itemIndex = getCartItemIndex(cartItems, bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);
    const updatedCartItems = updateCartItems(cartItems, newItem, itemIndex);    
    const orderTotal = calculateOrderTotal(updatedCartItems);
    console.log(typeof(orderTotal));
    return {        
        cartItems: updatedCartItems,
        orderTotal: orderTotal
    };
};

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }
    switch (action.type) {
        case BOOK_ADDED_TO_CART:
            return updateOrder(state, action.payload, 1);

        case BOOK_REMOVED_FROM_CART:
            return updateOrder(state, action.payload, -1);

        case ALL_BOOKS_REMOVED_FROM_CART:
            const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;