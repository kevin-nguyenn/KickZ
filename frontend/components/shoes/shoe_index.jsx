import React from 'react';

import ShoeIndexItem from './shoe_index_item';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchShoes();
    }

    render() {
        const { shoes } = this.props;
        return (
            <div>
                <li>
                    {
                        shoes.map(shoe => <ShoeIndexItem 
                            shoe={shoe} key={shoe.id}/>)
                    }
                </li>
            </div>
        );
    }
};

export default ShoeIndex;