import React from "react";
import { Switch, Route, Link } from "react-router-dom"

import { AuthRoute } from "../util/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ShoeIndexContainer from './shoes/shoe_index_container'


const App = () => {
    
    return (
        <div>
            <header className="nav-container">
                <NavBarContainer />
            </header>

            <header className="form-header hidden">
                <header className="form-header-logo">
                    <a href="/">KickZ</a>
                    {/* renders auth form logo */}
                </header>

                <Switch>
                    <AuthRoute exact path="/login" component={LogInFormContainer} />
                    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                    <AuthRoute exact path="/" component={ShoeIndexContainer}/>
                </Switch>
            </header>
            
            <div className="search-container">
                {/* renders greeting text and search bar */}
                {/* need to move this out to search folder later */}
                <div className="search-background">
                    <span className="background">
                        <div className="search-bar">
                            <div className="word-set1">Buy and Sell</div>
                            <div className="word-set2">Authentic Sneakers</div>
                            <input type="text" placeholder="Search..."/>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default App;