import React from 'react';
import { Link } from 'react-router-dom';

// const SIZES = [10];

const pricing = (number) => {
    let n;
    if (number < 0) {
        n = number.toString().split('');
        n.splice(1,0,'$');
        return n.join('');
    } else {
        return `$${number}`;
    }
};

const saleOrders = ({ shoe, sales, orders, updateOrder, createSale, addItem, currentUserId}) => {
    currentUserId = parseInt(currentUserId);
    if (sales.length === 0) sales = [{price: 0}, {price: 0}];
    if (sales.length === 1) sales.unshift({ price: 1 })
    let salesEnd = sales.length - 1;
    let highestBid = orders[0].price || -1;
    let lowestAsk = orders[1].price || -1;
    let lastDiff = (sales[salesEnd].price - sales[salesEnd - 1].price);

    let handleBuy = () => {
        if (lowestAsk === -1) {
            window.location.href = window.location.origin + `/#/profile/listings/new`;
        } else {
            // console.log(orders[1]);
            let orderUpdate = Object.assign({}, orders[1]);
            orderUpdate.active = false;
            orderUpdate.sold = true;
            updateOrder(orderUpdate).then(() => {
                let today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0');
                let yyyy = today.getFullYear();
                let dateString = `${yyyy}-${mm}-${dd}`;
                let sale = {
                    order_id: orders[1].id,
                    shoe_id: orders[1].shoe_id,
                    price: orders[1].price,
                    sex: orders[1].sex,
                    size: orders[1].size,
                    active: 'true',
                    date: dateString
                }
                createSale(sale).then(() => {
                    let purchaseItem = {
                        purchase_price: orders[1].price,
                        shoe_id: orders[1].shoe_id,
                        user_id: currentUserId,
                        size: `${orders[1].sex} ${orders[1].size}`
                    }
                    addItem(purchaseItem.user_id, purchaseItem).then(() => {
                        window.location.href = window.location.origin + `/#/profile/portfolio`;
                    })
                })
            })
        }
    };

    let handleSell = () => {
        if (highestBid === -1) {
            window.location.href = window.location.origin + `/#/profile/listings/new`;
        } else {
            // console.log(orders[0]);
            let orderUpdate = Object.assign({}, orders[0]);
            orderUpdate.active = false;
            orderUpdate.sold = true;
            updateOrder(orderUpdate).then(() => {
                let today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0');
                let yyyy = today.getFullYear();
                let dateString = `${yyyy}-${mm}-${dd}`;
                let sale = {
                    order_id: orders[0].id,
                    shoe_id: orders[0].shoe_id,
                    price: orders[0].price,
                    sex: orders[0].sex,
                    size: orders[0].size,
                    active: 'true',
                    date: dateString
                }
                createSale(sale).then(() => {
                    window.reload();
                })
            })
        }
    };

    handleBuy = handleBuy.bind(this);
    handleSell = handleSell.bind(this);

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
                        {`${pricing(lastDiff)} (${Math.round((lastDiff * 100) / sales[salesEnd - 1].price)}%)`}
                    </p>
                </span>
            </span>
            <span className="shoe-asks">
                <Link to="#" className="shoe-buttons" onClick={() => handleBuy()}>
                    <span className="asks-left">
                        <p className="shoe-ask-price">
                            {lowestAsk === -1 ? `N/A` : `$${lowestAsk}`}
                        </p>
                        <p className="asks-left-small">Lowest Ask</p>
                    </span>
                    <span className="asks-right">
                        <p className="asks-right-big">Buy</p>
                    </span>
                </Link>
            </span>
            <span className="shoe-bids">
                <Link to="#" className="shoe-buttons" onClick={() => handleSell()}>
                    <span shoe="bids-left">
                        <p className="bids-right-big">
                            {highestBid === -1 ? `N/A` : `$${highestBid}`}
                        </p>
                        <p className="bids-right-small">Highest Bid</p>
                    </span>
                    <span className="bids-right">
                        <p className="bids-right-big">Sell</p>
                    </span>
                </Link>
            </span>
        </div>
    )
};

export default saleOrders;