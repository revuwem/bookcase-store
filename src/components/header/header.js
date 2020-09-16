import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                </div>
            </nav>
        </header>
    );
};

export default Header;