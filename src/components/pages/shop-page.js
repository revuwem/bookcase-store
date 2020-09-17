import React from 'react';
import BookList from '../book-list';

import './pages.css';

const ShopPage = () => {
    return (
        <main role="main" id="shop-page" className="page">
            <div className="jumbotron">
                <h2>Shop</h2>
            </div>
            <div className="container-fluid">
                <BookList />
            </div>
        </main>
    );
};

export default ShopPage;