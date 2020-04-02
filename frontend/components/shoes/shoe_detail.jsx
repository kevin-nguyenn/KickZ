import React from 'react';
import SalesInfo from './detail_components/sale_info';


class ShoeDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shoeId: this.props.location.pathname.split('/')[2],
            follows: false,
            follow_id: -1,
            highestBid: -1,
            highestBidOrder: '',
            lowestAsk: -1,
            lowestAskOrder: ''
        }
    }

    componentDidMount() {
        this.props.fetchShoe(this.state.shoeId);
        // this.props.fetchOrdersByShoe(this.state.shoeId).then(data => {
        //     console.log(data);
        //     let highestBid = -1;
        //     let lowestAsk = -1;
        //     for (const order of Object.values(data.orders)) {
        //         if (highestBid === -1 && order.order_type === "buy") {
        //             highestBid = order;
        //         }
        //         else if (order.price > highestBid && order.order_type === "buy") {
        //             highestBid = order;
        //         }
        //         if (lowestAsk === -1 && order.order_type === "sell") {
        //             lowestAsk = order;
        //         }
        //         else if (order.price < lowestAsk && order.order_type === "sell") {
        //             lowestAsk = order;
        //         }
        //     };
        //     this.setState({ highestBid: highestBid, lowestAsk: lowestAsk });
        // });
        // this.props.fetchSales(this.state.shoeId);
        // this.props.fetchLastSale(this.state.shoeId);
        this.props.fetchFollows(this.props.currentUser.id).then(data => {
            for (const follow of Object.values(data.follows)) {
                if (parseInt(follow.shoe_id) === parseInt(this.state.shoeId)) {
                    this.setState({ follows: true, follow_id: follow.id });
                }
            }
        });
    }

    handleFollow(e) {
        e.preventDefault();
        if (this.state.follows) {
            this.props.deleteFollow(this.state.follow_id);
            this.setState({ follows: false, follow_id: -1 });
        }
        else if (!this.state.follows) {
            this.props.createFollow({ user_id: this.props.currentUser.id, shoe_id: this.state.shoeId })
                .then(data => {
                    this.setState({ follows: true, follow_id: data.follow.id });
            })
        }
    }

    render() {
        if (this.props.shoe === undefined) return null;

        return (
            <section className="shoe-detail-container">
                <div className="shoe-detail-buttons-outer">
                    <div className="shoe-detail-buttons">
                        {/* <button className="shoe-detail+p">+ Portfolio</button> */}
                        <button className="shoe-detail+f" onClick={this.handleFollow}>
                            {this.state.follows ? 'Following' : '+ Follow'}
                        </button>
                    </div>
                </div>
                <header>{this.props.shoe.name}</header>
                <span className="shoe-detail-misc">
                    <span className="shoe-detail-condition">Condition:
                        <p style={{color: 'green'}}>New</p>
                    </span>|
                    <span className="shoe-detail-ticker">Ticker:
                        <p style={{color: 'black'}}>{this.props.shoe.ticker}</p>
                    </span>|
                    <span className="shoe-detail-authenticity">
                        <p style={{color: 'green'}}>100% Authentic</p>
                    </span>
                </span>
                <div className="shoe-detail-img-container">
                    <img src={this.props.shoe.photoUrl} alt="" 
                        className="shoe-detail-img"
                    />
                    <span className="shoe-details">
                        <span>
                            <p className="shoe-detail-cat">Style</p>
                            <p>{this.props.shoe.style_code}</p>
                        </span>
                        <span>
                            <p className="shoe-detail-cat">Colorway</p> 
                            <p>{this.props.shoe.colorway}</p>
                        </span>
                        <span>
                            <p className="shoe-detail-cat">Release Date</p> 
                            <p>{this.props.shoe.release_date}</p>
                        </span>
                    </span>
                </div>
            </section>
        )
    }
};

export default ShoeDetail;