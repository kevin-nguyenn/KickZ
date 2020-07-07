import React from 'react';
import ShoeIndexItem from './shoe_index_item'


class ShoesSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shoes: this.props.shoes,
            filtered: []
        }
        this.filter = this.filterShoes.bind(this);
    }

    componentDidMount() {
        let searchedShoes = Object.values(this.props.shoes);

        if (searchedShoes) {
            this.setState({ shoes: searchedShoes })
            this.filterShoes();
        } else {
            this.props.fetchShoes()
                .then(action => this.setState({ shoes: action.shoes }))
                .then(() => this.filterShoes());
        }


        let searchBar = document.getElementById('search-input');
        searchBar.addEventListener('keyup', this.filter);
    }

    componentWillUnmount() {
        let searchBar = document.getElementById('search-input');
        searchBar.removeEventListener('keyup', this.filterShoes);
    }

    filterShoes() {
        let shoes = Object.values(this.state.shoes);
        let filtered = [];
        let terms = document.getElementById('search-input').value.split(' ');
        if (terms.length === 0) filtered = shoes;
        else {
            terms = terms.map((word) => word.toLowerCase());
            for (let shoe of shoes) {
                for (let name of shoe.name.toLowerCase().split(' ')) {
                    for (let term of terms) {
                        if (name.includes(term)) {
                            if (!filtered.includes(shoe)) filtered.push(shoe);
    
                            break;
                        }
                    }
                };

                for (let ticker of shoe.ticker.toLowerCase().split('')) {
                    for (let term of terms) {
                        if (ticker.includes(term)) {
                            if (!filtered.includes(shoe)) filtered.push(shoe);

                            break;
                        }
                    }
                };

                for (let brand of shoe.brand.toLowerCase().split(' ')) {
                    for (let term of terms) {
                        if (brand.includes(term)) {
                            if (!filtered.includes(shoe)) filtered.push(shoe);
    
                            break;
                        }
                    }
                };

                for (let colorway of shoe.colorway.toLowerCase().split(' ')) {
                    for (let term of terms) {
                        if (colorway.includes(term)) {
                            if (!filtered.includes(shoe)) filtered.push(shoe);
    
                            break;
                        }
                    }
                };

                for (let style_code of shoe.style_code.toLowerCase().split(' ')) {
                    for (let term of terms) {
                        if (style_code.includes(term)) {
                            if (!filtered.includes(shoe)) filtered.push(shoe);
    
                            break;
                        }
                    }
                };

            };
        }

        this.setState({filtered: filtered})
    }

    render() {
        // console.log(this.state);
        let shoes = this.state.filtered;
        if (shoes.length === 0) return (
            <div id="products-index-div">
                <b className="center-everything">
                    No search results found.

                </b>
            </div>
        )
        else return (
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