import React from 'react';


class ShoeDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchShoe(this.props.match.params.shoeId);
    }

    render() {
        if (this.props.shoe === undefined) return null;

        return (
            <section className="shoe-detail-container">
                {/* shoe details */}
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
                </div>
            </section>
        )
    }
};

export default ShoeDetail;