import React from "react";
import { Switch, Route } from "react-router-dom"
import { AuthRoute } from "../util/route_util";

import NavBarContainer from "./nav_bar/nav_bar_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';


const App = () => {
    // const showNavBar = this.props.currentUser ? 
    return (
        <div>
            <header className="nav-container">
                <NavBarContainer />
            </header>

            <header className="form-header hidden">
                <header className="form-header-logo">KickZ</header>
                <Switch>
                    <AuthRoute exact path="/login" component={LogInFormContainer} />
                    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                </Switch>
            </header>
        </div>
    )
};

export default App;