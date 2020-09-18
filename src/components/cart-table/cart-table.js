import React from 'react';

import './cart-table.css';

const CartTable = () => {
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
                    <tr class="table-secondary">
                        <th scope="row">1</th>
                        <td>Grokking algoritms</td>
                        <td>1</td>
                        <td>$50</td>
                        <td>
                            <button className="btn btn-outline-success btn-sm mr-2">
                                <i class="fas fa-plus"></i>
                            </button>
                            <button className="btn btn-outline-warning btn-sm mr-2">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-danger btn-sm">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="table-active">
                        <th scope="row" colSpan="4" className="text-right">Total:</th>
                        <td>$ 55</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default CartTable;