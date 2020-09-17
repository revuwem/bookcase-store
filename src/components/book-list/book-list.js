import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import {withBookcaseService} from '../hoc';

import {booksLoaded} from '../../actions';
import compose from '../../utils';

import './book-list.css';

class BookList extends Component {

    componentDidMount(){
        //1.receive data
        const {bookcaseService} = this.props;
        const data = bookcaseService.getBooks();
        console.log(data);
        //2.dispatch action to store
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;

        return (
            <ul>
                {
                    books.map((book) => (
                        <li key={book.id}>
                            <BookListItem book={book} />
                        </li>
                    ))
                }
            </ul>
        );
    }
};

const mapStateToProps = ({books}) => ({books});

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookcaseService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
