import React from 'react';
import CartTable from '../cart-table';

import './pages.css';

const CartPage = () => {
    return (
        <main role="main" id="cart-page" className="page">
            <div className="jumbotron">
                <h2>Cart</h2>
            </div>
            <div className="container-fluid">
                <CartTable />
            </div>
        </main>
    );
};

export default CartPage;