import React from 'react';
import { withRouter } from 'react-router-dom';

class ShoeIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // if (this.props.shoes === undefined) return null;
        return (
            <div className="shoe-item">
                <li className="shoe-item-display">
                    <div className="shoe-item-img">
                        <img src={this.props.shoe.photoUrl} 
                            alt="" className="shoe-item-img"
                        />
                    </div>
                    <span className="shoe-item-name">
                        {this.props.shoe.name} 
                        <br/>
                        ${this.props.shoe.price}
                        {/* Shoe Item!!! */}
                    </span>
                </li>
            </div>
        );
    }
};

export default withRouter(ShoeIndexItem);