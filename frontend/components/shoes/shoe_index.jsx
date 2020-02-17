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
        this.props.fetchShoes()
            .then(action => this.setState({ shoes: action.shoes }));
    }

    render() {
        // const { shoes } = this.props;
        // if (this.props.shoes === undefined) return null;
        // debugger;
        let shoes = Object.values(this.state.shoes);


        return (
            <div className="shoes-index">
                <div className="title-container">
                    <div className="title-container-msg">
                        <span className="title-header">
                            SNEAKERS
                        </span>
                        <span className="title-msg">
                            On KickZ, every sneaker you want is always available. Buy and sell new sneakers from Air Jordan, Adidas, Nike and more!
                        </span>
                    </div>
                    <ul className="title-container-img">
                        <img src={window.imageUrl.titleImage} alt=""/>
                    </ul>
                </div>
                <div className="index-container">
                    <div className="index-filters">
                        <div className="filter-options">
                            <div>Sneakers</div>
                            <br/><br/>
                            <div>Yeezy</div>
                            <div>Jordan</div>
                            <div>Nike</div>
                        </div>
                    </div>
                    <ul className="shoe-listings">
                        {
                            shoes.map((shoe, i) => (
                                <ShoeIndexItem shoe={shoe} key={shoe.id} />
                            ))
                        }
                    </ul>

                </div>
            </div>
        );
    }
};

export default ShoeIndex;