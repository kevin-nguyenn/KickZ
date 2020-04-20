import React from 'react';

import SlideShow from '../slideshow/slideshow';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch.bind(this);
    }

    handleSearch(e) {
        e.preventDefault();
        let searchTerm = document.getElementById("navbar-search").value;
        if (searchTerm.length < 2) {
            window.location.hash = "#/shoes";
        } else {
            window.location.hash = "#/shoes/search";
            window.location.searchCache = searchTerm;
        }
    }

    render() {
        return (
            <div>
            <div className="search-container">
                <div className="search-background">
                    <span className="background">
                        <div className="search-bar">
                            <div className="word-set1">Buy and Sell</div>
                            <div className="word-set2">Authentic Sneakers</div>
                            <form className="search-input">
                                <input 
                                    type="text" 
                                    placeholder="🔍 Search for brand..."
                                    defaultValue = ""
                                    onChange={this.handleSearch}
                                />
                            </form>
                        </div>
                    </span>
                </div>
            </div>

            <div className="filler"></div>

            <SlideShow />

            </div>
        );
    }
};

export default Home;