import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from '../../util/object_api_util';


class FollowItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            follow: (this.props.follow ? this.props.follow : {}),
            highestBid: -1,
            lowestAsk: 20000
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        let shoe_id = this.state.follow.id;
        this.props.fetchOrdersByShoe(shoe_id).then((data) => {
            let newState = Object.assign({}, this.state);
            console.dir(data);
            for (let order of Object.values(data.orders)) {
                if (order.order_type === 'buy' && order.price > newState.highestBid) newState.highestBid = order.price;
                else if (order.order_type === 'sell' && order.price < newState.lowestAsk) newState.lowestAsk = order.price;
            }
            this.setState(newState);
            // console.dir(this.state);
        })
    }

    handleDelete(e) {
        this.props.deleteFollow(newOrder).then(data => console.dir(data));
        this.setState({ follow: {} });
    }

    render() {
        let shoe = this.state.follow;
        if (isEmpty(shoe)) return (null);
        return (
            <tr className="follows-row-cat fl-item">
                <td className="follow-cat0">
                    <Link to="/profile/cop-list/">
                        <img className="delete-follow-item-btn" 
                            src="https://image.flaticon.com/icons/png/512/64/64022.png" 
                            onClick={this.handleDelete} height="25px" 
                        />
                    </Link>
                </td>

                <td className="follow-cat1 fl-item-info">
                    <span className="fl-item-pic">
                        <img src={shoe.photoUrl} width="80px" />
                    </span>
                    <Link to={`/shoes/${shoe.id}`}>
                        <ul className="fl-item-details">
                            <li>{shoe.name}</li>
                        </ul>
                    </Link>
                </td>
                <td className="follow-cat2">
                    <p>
                        {this.state.highestBid === -1 ? 'N/A' : `$${this.state.highestBid}`}
                    </p>
                </td>
                <td className="follow-cat3">
                    <p>
                        {this.state.lowestAsk === 20000 ? 'N/A' : `$${this.state.lowestAsk}`}
                    </p>
                </td>
            </tr>
        )
    }
};

export default FollowItem;