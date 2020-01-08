import React from "react";
import { Switch, Route } from "react-router-dom"
import { AuthRoute } from "../util/route_util";

import NavBarContainer from "./nav_bar/nav_bar_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';


const App = () => (
    <div>
        <header className="nav-container">
            <NavBarContainer />
        </header>

        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;