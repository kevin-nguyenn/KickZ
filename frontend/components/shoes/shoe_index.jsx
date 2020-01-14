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
            <div className="shoes-index">
                <div className="title-container">
                    Sneakers
                    <div className="title-container-msg">
                        On KickZ, every sneaker you want is always available. Buy and sell new sneakers from Air Jordan, Adidas, Nike and more!
                    </div>
                </div>
                <ul className="title-container-img">
                    <img src={window.imageUrl.titleImage} alt=""/>
                </ul>
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