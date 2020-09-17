import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ itemsNumber, sumTotal }) => {
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
                    <ul className="navbar-nav mr-auto">
                        <Link to="/shop/" className="nav-item">Shop</Link>
                        <Link to="/cart" className="nav-item">Cart</Link>
                    </ul>
                    <p className="cart-details"><span><i class="fas fa-shopping-cart"></i> {itemsNumber}</span> (<span><i class="fas fa-dollar-sign"></i>{sumTotal}</span>)</p>
                </div>
            </nav>
        </header>
    );
};

export default Header;