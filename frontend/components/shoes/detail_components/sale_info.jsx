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
            <span className="style-line"></span>
            <span className="shoe-orders-last-sale">
                <span className="shoe-last-sale-top">
                    <p className="last-sale-bold">Last Sale</p>
                    <p className="last-sale-num">{pricing(sales[salesEnd].price)}</p> 
                    <p className="last-sale-change" style={lastDiff > 0 ? { color: 'green' } : lastDiff < 0 ? { color: 'red' } : { color: 'black' }}>
                        {`${formatMoney(lastDiff)} (${lastDiff / sales[salesEnd - 1].price}%)`} 
                    </p>
                </span>
                <span className="shoe-last-sale-bottom">
                    <p>Size {sales[salesEnd].size}</p>
                    <span className="small-style-line"></span>
                    <p>View All Sales</p>
                </span>
            </span>
            <span className="shoe-asks">
                <Link to="#">
                    <span className="asks-left">
                        <p className="shoe-ask-price">$500</p>
                        <p>Lowest Ask</p>
                    </span>
                    <span className="asks-right">
                        <p className="asks-right-big">Buy</p>
                        <p className="asks-right-small">or Bid</p>
                    </span>
                </Link>
                <span className="asks-bottom">
                    <p>Size 10</p>
                    <span className="small-style-line"></span>
                    <p>View All Asks</p>
                </span>
            </span>
            <span className="shoe-bids">
                <Link to="#">
                    <span shoe="bids-left">
                        <p className="bids-right-big">$500</p>
                        <p className="bids-right-small">Lowest Bid</p>
                    </span>
                    <span className="bids-right">
                        <p className="bids-right-big">Sell</p>
                        <p className="bids-right-small">or Ask</p>
                    </span>
                </Link>
                <span className="bids-bottom">
                    <p>Size 10</p>
                    <span className="small-style-line"></span>
                    <p>View All Bids</p>
                </span>
            </span>
        </div>
    )
}