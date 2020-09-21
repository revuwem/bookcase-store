import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.css';

const Header = ({ itemsNumber, orderTotal }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    Bookcase Store
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="navbar-nav w-100">
                        <Link to="/shop/" className="nav-item">Shop</Link>
                        <Link to="/cart" className="nav-item cart-details"><span><i className="fas fa-shopping-cart"></i> {itemsNumber}</span> (<span><i className="fas fa-dollar-sign"></i>{orderTotal}</span>)</Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        itemsNumber: cartItems.reduce((acc, item) => (acc += item.count), 0),
        orderTotal: orderTotal
    }
}

export default connect(mapStateToProps)(Header);