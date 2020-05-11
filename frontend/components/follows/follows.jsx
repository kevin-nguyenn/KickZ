import React from 'react'
import isEmpty from '../../util/object_api_util';
import FollowItemContainer from './follow_item_container';
// import { Link } from 'react-router-dom';

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
                    console.dir(data);
                    for (let follow of Object.values(data.follows)) {
                        let shoe = Object.assign({}, this.props.shoes[follow.shoe_id]);
                        shoe.follow_id = follow.id;
                        follows.push(shoe);
                    }
                    this.setState({ follows: follows });
                })
            );
    }

    render() {
        let shoes = this.props.shoes;
        return (
            <div className="follows-div">
                <span className="follows-header">Following</span>
                <table className="follows-table">
                    <thead className="follows-table-heading">
                        <tr className="follows-row-cat">
                            <th className="follow-cat0"></th>
                            <th className="follow-cat1">Item</th>
                            <th className="follow-cat2">Highest Bid</th>
                            <th className="follow-cat3">Lowest Ask</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.follows.map(follow => isEmpty(follow) ? null : <FollowItemContainer follow={follow} key={`follow${follow.follow_id}`} />)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
};

export default Follows;