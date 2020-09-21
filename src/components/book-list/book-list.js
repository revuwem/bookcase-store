import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookcaseService } from '../hoc';

import { fetchBooks, bookAddedToCart } from '../../actions';
import compose from '../../utils';

import './book-list.css';


const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => (
                    <li key={book.id} className="book-list-item">
                        <BookListItem
                            book={book}
                            onAddedToCart={() => onAddedToCart(book.id)} />
                    </li>
                ))
            }
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <BookList books={books} onAddedToCart={onAddedToCart} />
        );
    }
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookcaseService }) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookcaseService),
        onAddedToCart: bookAddedToCart
    }, dispatch);
};

export default compose(
    withBookcaseService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
