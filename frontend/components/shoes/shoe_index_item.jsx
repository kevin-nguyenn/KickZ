import React from 'react';
import { withRouter } from 'react-router-dom';

class ShoeIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shoe-item">
                <img src={window.imageUrl.yeezyZebra} alt="" className="shoe-item-img"/>
                <li className="shoe-item-name">
                    <span>
                        {/* {this.props.shoe.name} */}
                        Shoe Item!!!
                    </span>
                </li>
            </div>
        );
    }
};

export default withRouter(ShoeIndexItem);