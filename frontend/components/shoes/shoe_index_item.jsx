import React from 'react';

class ShoeIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shoe-item">
                <li className="shoe-item-name">
                    <span>{this.props.shoe.name}</span>
                    <img src="" alt="" className="shoe-item-img"/>
                </li>
            </div>
        );
    }
};

export default ShoeIndexItem;