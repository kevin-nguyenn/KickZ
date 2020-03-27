import React from 'react';

import SlideShow from '../slideshow/slideshow';

class Home extends React.Component {
    render() {

        return (
            <div>
                <div className="search-container">
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

                <div className="filler">
                </div>

                <SlideShow />

                {/* <div className="">Most Popular</div> */}
            </div>
        );
    }
};

export default Home;