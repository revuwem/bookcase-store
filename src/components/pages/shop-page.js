import React from 'react';
import BookList from '../book-list';

import {withBookcaseService} from '../hoc';

const ShopPage = ({bookcaseService}) => {
    
    const books = bookcaseService.getBooks();

    return (
        <div className="shop-page">
            <div className="jumbotron">
                <h2>Shop</h2>
            </div>
            <BookList books={books}/>
        </div>
    );
};

export default withBookcaseService()(ShopPage);