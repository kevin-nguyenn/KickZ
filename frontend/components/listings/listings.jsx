import React from 'react'
import ListingsBuyingContainer from './listings_buying_container';
import ListingsSellingContainer from './listings_selling_container';
import ListingsCreated from './listings_created';
import { ProtectedRoute } from '../../utils/route-util';
import { Link } from 'react-router-dom';

class ListingsBuying extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchShoes();
    }

    render() {
        return (
            <div id="listings-div">
                <span id="listings-links">
                    <Link to="/profile/listings/buying" className={location.hash.split('/').includes('buying') ? "listings-selected" : ""}>Buying</Link>
                    <Link to="/profile/listings/selling" className={location.hash.split('/').includes('selling') ? "listings-selected" : ""}>Selling</Link>
                </span>
                <ProtectedRoute exact path="/profile/listings/buying" component={ListingsBuyingContainer} />
                <ProtectedRoute exact path="/profile/listings/selling" component={ListingsSellingContainer} />
                <ProtectedRoute exact path="/profile/listings/created" component={ListingsCreated} />
            </div>
        )
    }
}

export default ListingsBuying;