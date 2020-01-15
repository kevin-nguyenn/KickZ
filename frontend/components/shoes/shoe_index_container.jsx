import { connect } from 'react-redux';
import { fetchShoes } from '../../actions/shoe_actions';

import ShoeIndex from './shoe_index';

const mSTP = (state) => {
    return ({shoes: Object.values(state.entities.shoes)})
};

const mDTP = dispatch => ({
    fetchShoes: () => dispatch(fetchShoes())
});

export default connect(mSTP, mDTP)(ShoeIndex);