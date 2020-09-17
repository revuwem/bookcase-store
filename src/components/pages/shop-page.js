import React from 'react';
import BookList from '../book-list';

const ShopPage = () => {
    return (
        <div className="shop-page">
            <div className="jumbotron">
                <h2>Shop</h2>
            </div>
            <BookList />
        </div>
    );
};

export default ShopPage;