import React from 'react';
import ShoeIndexItem from './shoe_index_item'


class ShoesSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shoes: this.props.shoes,
            searchTerms: []
        }
    }

    componentDidMount() {
        this.props.fetchShoes()
            .then(action => this.setState({ shoes: action.shoes }));
            
        if (window.location.searchCache) {
            let newState = Object.assign({}, this.state);
            newState.searchTerms = [];
            for (let word of window.location.searchCache.split(' ')) {
                newState.searchTerms.push(word);
            }
            delete window.location.searchCache;
            this.setState(newState);
        };
    }

    filterShoes(shoes) {
        let filtered = [];
        let terms = this.state.searchTerms;
        terms = terms.map((word) => word.toLowerCase());
        for (let shoe of shoes) {
            for (let name of shoe.name.toLowerCase().split(' ')) {
                if (terms.includes(name)) {
                    if (!filtered.includes(shoe)) filtered.push(shoe);

                    break;
                }
            };

            for (let ticker of shoe.ticker.toLowerCase().split('')) {
                if (terms.includes(ticker)) {
                    if (!filtered.includes(shoe)) filtered.push(shoe);

                    break;
                }
            };

            for (let brand of shoe.brand.toLowerCase().split(' ')) {
                if (terms.includes(brand)) {
                    if (!filtered.includes(shoe)) filtered.push(shoe);

                    break;
                }
            };

            for (let colorway of shoe.colorway.toLowerCase().split(' ')) {
                if (terms.includes(colorway)) {
                    if (!filtered.includes(shoe)) filtered.push(shoe);

                    break;
                }
            };

            for (let style_code of shoe.style_code.toLowerCase().split(' ')) {
                if (terms.includes(style_code)) {
                    if (!filtered.includes(shoe)) filtered.push(shoe);

                    break;
                }
            };

        };

        return filtered;
    }

    render() {
        // console.log(this.state);
        let shoes = Object.values(this.state.shoes);
        if (this.state.searchTerms.length > 0) {
            shoes = this.filterShoes(shoes);
        }

        return (
            <div className="index-container">
                <ul className="shoe-listings">
                    {shoes.map(shoe => (
                        <ShoeIndexItem shoe={shoe} key={shoe.id} />
                    ))}
                </ul>
            </div>
        )
    }
};

export default ShoesSearch;