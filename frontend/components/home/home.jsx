import React from 'react';

import SlideShow from '../slideshow/slideshow';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch.bind(this);
    }

    handleSearch(e) {
        e.preventDefault();
        // let searchTerm = document.getElementById("search").value;
        // if (searchTerm.length < 2) {
        //     window.location.hash = "#/shoes";
        // } else {
        //     window.location.hash = "#/shoes/search";
        //     window.location.searchCache = searchTerm;
        // }
        window.location.hash = "#/shoes/search";
    }

    render() {
        return (
            <div>
            <div className="search-container">
                <div className="search-background">
                    <span id="search" className="background">
                        <div className="search-bar">
                            <div className="word-set1">Buy and Sell</div>
                            <div className="word-set2">Authentic Sneakers</div>
                            <form className="search-input">
                                <input 
                                    type="text" 
                                    placeholder="🔍 Search for brand..."
                                    id="search-input"
                                    defaultValue = ""
                                    onChange={this.handleSearch}
                                />
                                <input type="submit" style={{ display: 'none' }} />
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