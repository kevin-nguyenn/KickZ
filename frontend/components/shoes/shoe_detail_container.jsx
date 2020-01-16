import { connect } from 'react-redux';
import { fetchShoe } from '../../actions/shoe_actions';

import ShoeDetail from './shoe_detail';

const mSTP = (state, ownProps) => {
    return {
        shoe: state.entities.shoes[ownProps.match.params.shoeId]
    }
};

const mDTP = dispatch => {
    return {
        fetchShoe: (shoe) => dispatch(fetchShoe(shoe))
    }
};

export default connect(mSTP, mDTP)(ShoeDetail);