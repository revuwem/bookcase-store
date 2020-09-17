import React, { Fragment } from 'react';

import './book-list-item.css';

const BookListItem = ({ book }) => {
    const { title, author, price, image } = book;

    return (
        <div className="book-card">
            <img src={image} alt="" className="book-card-img" />
            <div className="book-card-body">
                <div className="book-details">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-subtitle text-muted">{author}</p>
                    <span className="card-text">$ {price}</span>
                </div>
                <button className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    );
};

export default BookListItem;