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
        // const { shoes } = this.props;
        // if (this.props.shoes === undefined) return null;
        // debugger;

        return (
            <div className="shoes-index">
                <div className="title-container">
                    <div className="title-container-msg">
                        <span className="title-header">
                            Sneakers
                        </span>
                        <span className="title-msg">
                            On KickZ, every sneaker you want is always available. Buy and sell new sneakers from Air Jordan, Adidas, Nike and more!
                        </span>
                    </div>
                    <ul className="title-container-img">
                        <img src={window.imageUrl.titleImage} alt=""/>
                    </ul>
                </div>
                <ul className="shoe-listings">
                    {
                        this.props.shoes.map(shoe => <ShoeIndexItem 
                            shoe={shoe} key={shoe.id}/>)
                    }
                </ul>
            </div>
        );
    }
};

export default ShoeIndex;