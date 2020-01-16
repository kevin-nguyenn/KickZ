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
                <div className="shoe-detail-name">
                    {this.props.shoe.name}
                </div>
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