import React from 'react';

import ShoeIndexItem from './shoe_index_item';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shoes: this.props.shoes
        }
    }

    componentDidMount() {
        this.props.fetchShoes();
    }

    render() {
        // debugger;
        // const { shoes } = this.props;
        return (
            <div>
                Shoes Index Page!!!!!!!!!!!!
                <ul>
                    {
                        this.state.shoes.map(shoe => <ShoeIndexItem 
                            shoe={shoe} key={shoe.id}/>)
                    }
                </ul>
            </div>
        );
    }
};

export default ShoeIndex;