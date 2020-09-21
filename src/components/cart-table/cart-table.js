import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../actions';

import './cart-table.css';

const CartTable = ({ items, orderTotal, onIncrease, onDecrease, onDelete }) => {

    const renderTableRow = (item, idx) => {

        const { id, title, count, total } = item;

        return (
            <tr key={id} className="table-secondary" >
                <th scope="row">{idx + 1}</th>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button className="btn btn-outline-success btn-sm mr-2"
                        onClick={() => onIncrease(id)}>
                        <i className="fas fa-plus"></i>
                    </button>
                    <button className="btn btn-outline-warning btn-sm mr-2"
                        onClick={() => onDecrease(id)}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <button className="btn btn-outline-danger btn-sm"
                        onClick={() => onDelete(id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        );
    }

    return (
        <div className="cart-table">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Count</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(renderTableRow)
                    }
                </tbody>
                <tfoot>
                    <tr className="table-active">
                        <th scope="row" colSpan="4" className="text-right">Total:</th>
                        <td>$ {orderTotal}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

const mapStateToProps = ({shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);