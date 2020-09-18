import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookcaseService } from '../hoc';

import { booksRequested, booksLoaded, booksLoadingError } from '../../actions';
import compose from '../../utils';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <ul className="book-list">
                {
                    books.map((book) => (
                        <li key={book.id} className="book-list-item">
                            <BookListItem book={book} />
                        </li>
                    ))
                }
            </ul>
        );
    }
};

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, ownProps) => {

    const {bookcaseService} = ownProps;
    return {
        fetchBooks: () => {            
            dispatch(booksRequested());
            bookcaseService.getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((error) => dispatch(booksLoadingError(error)));
        }
    }
};

export default compose(
    withBookcaseService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
