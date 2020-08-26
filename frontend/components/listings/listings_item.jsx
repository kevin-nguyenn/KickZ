import React from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import isEmpty from '../../util/object_api_util';

Array.prototype.rotateRight = function (n) {
    this.unshift(this.splice(n, this.length))
    return this;
}

Array.prototype._formatDateFromDate = function () {
    this[1] -= 1;
    if (this[0].length === 1) this[0] = `0${this[0]}`;
    if (this[1].length === 1) this[1] = `0${this[1]}`;
    return this;
}

Array.prototype._formatDateFromString = function () {
    this[2] -= 1;
    return this;
}

class ListingItem extends React.Component {
    constructor(props) {
        super(props);
        // console.log('here');
        // console.dir(this.props);
        this.state = {
            order: (this.props.order ? this.props.order : {}),
            shoe: (this.props.shoes[this.props.order.shoe_id] ? this.props.shoes[this.props.order.shoe_id] : {}),
            highestBid: -1,
            lowestAsk: 21717
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        let s_id = this.state.order.shoe_id;
        if (!this.props.shoes[s_id]) this.props.fetchShoe(s_id);
        this.props.fetchOrdersByShoe(s_id).then((data) => {
            let newState = Object.assign({}, this.state);

            for (let order of Object.values(data.orders)) {
                if (order.order_type === 'buy' && order.price > newState.highestBid) newState.highestBid = order.price;
                else if (order.order_type === 'sell' && order.price < newState.lowestAsk) newState.lowestAsk = order.price;
            }

            this.setState(newState);
        })
    }

    handleDelete(e) {
        // e.preventDefault();
        let newOrder = Object.assign({}, this.state.order);
        newOrder.active = 'false'
        this.props.updateOrder(newOrder)//.then(data => console.dir(data));
        this.setState({ order: {}, shoe: {} });
        location.reload();
        // console.dir(this.context);
        // this.setState(this.state.a ? {a: false} : {a: true});
        // this.forceUpdate();
    }

    render() {
        let shoe = this.state.shoe;
        let order = this.state.order;
        if (isEmpty(shoe) || isEmpty(order)) return (null);
        let size = ["n/a", "n/a"];
        if (order) size = [order.sex, order.size];
        return (
            <tr className="listing-row listing-item">
                <td className="listing-col0">
                    <Link to="#">
                        <img className="delete-listing-item-btn" src="https://image.flaticon.com/icons/png/512/64/64022.png" onClick={this.handleDelete} height="25px" />
                    </Link>
                </td>
                <td className="listing-col1 listing-item-info">
                    <span className="listing-item-pic">
                        <img src={shoe.photoUrl} width="80px" />
                    </span>
                    <Link to={`/shoes/${shoe.id}/view`}>
                        <ul className="listing-item-details">
                            <li>{shoe.brand}</li>
                            <li>{shoe.name}</li>
                            <li>U.S. {size[0] === "M" ? `Men's Size: ${size[1]}` : size[0] === 'F' ? `Women's Size: ${size[1]}` : `Kids' Size: ${size[1]}`}</li>
                        </ul>
                    </Link>
                </td>
                <td className="listing-col2"><p>${order.price}</p></td>
                <td className="listing-col3"><p>{this.state.highestBid === -1 ? 'n/a' : `$${this.state.highestBid}`}</p></td>
                <td className="listing-col4"><p>{this.state.lowestAsk === 21717 ? 'n/a' : `$${this.state.lowestAsk}`}</p></td>
            </tr>
        )
    }
}

export default ListingItem;