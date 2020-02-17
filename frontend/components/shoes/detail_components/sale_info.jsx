import React from 'react';
import { Link } from 'react-router-dom';

// const SIZES = [10];

const pricing = (number) => {
    let n;
    if (number < 0) {
        n = number.toString().split('');
        n.splice(1,0,'$');
        return n;
    } else {
        return `$${number}`
    }
};

export default ({ shoe, sales, orders}) => {
    if (sales.length === 0) sales = [{price: 0}, {price: 0}];
    if (sales.length === 1) sales.unshift({ price: 1 })
    let salesEnd = sales.length - 1;
    let ordersEnd = orders.length - 1;
    let lastDiff = (sales[salesEnd].price - sales[salesEnd - 1].price);

    return (
        <div className="shoe-orders">
            <span className="shoe-orders-size">
                <p>Size</p>
                <span>10</span>
            </span>
            <span className="shoe-orders-style-line"></span>
            <span>
                
            </span>
        </div>
    )
}