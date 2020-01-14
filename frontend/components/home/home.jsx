import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="search-container">
                {/* renders greeting text and search bar
                need to move this out to search folder later */}
                <div className="search-background">
                    <span className="background">
                        <div className="search-bar">
                            <div className="word-set1">Buy and Sell</div>
                            <div className="word-set2">Authentic Sneakers</div>
                            <input type="text" placeholder="Search..." />
                        </div>
                    </span>
                </div>
            </div>
        );
    }
};

export default Home;