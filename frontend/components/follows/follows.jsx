import React from 'react'
// import isEmpty from '../../utils/obj-util';
import FollowItemContainer from './follow_item_container';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Follows extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            follows: []
        }
    }

    componentDidMount() {
        let follows = [];
        this.props.fetchShoes()
            .then(() => this.props.fetchFollows(this.props.currentUser.id)
                .then((data) => {
                    // console.dir(data);
                    for (let follow of Object.values(data.follows)) {
                        let shoe = Object.assign({}, this.props.shoes[follow.shoe_id]);
                        shoe.follow_id = follow.id;
                        follows.push(shoe);
                    }
                    this.setState({ follows: follows });
                    // console.log(this.state);
                    // console.log(data.follows);
                })
            );
    }

    render() {
        let shoes = this.props.shoes;
        return (
            <div id="follows-div">
                <span id="follows-header">Following</span>
                <table id="follows-table">
                    <thead id="follows-table-heading">
                        <tr className="fl-row">
                            <th className="fl-col0"></th>
                            <th className="fl-col1">Item</th>
                            <th className="fl-col2">Highest Bid</th>
                            <th className="fl-col3">Lowest Ask</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // this.state.follows.map(follow => isEmpty(follow) ? null : <FollowItemContainer follow={follow} key={`follow${follow.f_id}`} />)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
};

export default Follows;