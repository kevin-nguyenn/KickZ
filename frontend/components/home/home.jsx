import React from 'react';

class Home extends React.Component {
    render() {

        return (
            <div>
                <div className="search-container">
                    <div className="search-background">
                        <span className="background">
                            {/* <img src={window.imageUrl.homeImage} alt="" className="background-pic"/> */}
                            <div className="search-bar">
                                <div className="word-set1">Buy and Sell</div>
                                <div className="word-set2">Authentic Sneakers</div>
                                <input type="text" placeholder="Search..." />
                            </div>
                        </span>
                    </div>
                </div>
                <div className="filler">
                </div>
            </div>
        );
    }
};

export default Home;