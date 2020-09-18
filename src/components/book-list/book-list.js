import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import { withBookcaseService } from '../hoc';

import { booksRequested, booksLoaded } from '../../actions';
import compose from '../../utils';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { bookcaseService, booksRequested, booksLoaded } = this.props;       
        booksRequested();
        bookcaseService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const { books, loading } = this.props;

        if(loading){
            return <Spinner />;
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

const mapStateToProps = ({ books, loading }) => ({ books, loading });

const mapDispatchToProps = {
    booksRequested,
    booksLoaded
};

export default compose(
    withBookcaseService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
