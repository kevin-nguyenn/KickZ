import React from "react";
import { Switch, Route, Link } from "react-router-dom"

import { AuthRoute } from "../util/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container";
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import ShoeIndexContainer from './shoes/shoe_index_container'
import FormContainer from './session_form/form';
import HomeContainer from './home/home_container';
// import { signup } from "../util/session_api_util";


const App = () => {
    
    return (
        <div>
            <header className="nav-container">
                <NavBarContainer />
            </header>

            <header className="form-header">

                <Switch>
                    <Route exact path="/" component={HomeContainer}/>
                    <AuthRoute exact path="/login" component={FormContainer} />
                    <AuthRoute exact path="/signup" component={FormContainer}/>
                    <Route exact path="/shoes" component={ShoeIndexContainer}/>
                </Switch>
            </header>
        </div>
    )
};

export default App;

