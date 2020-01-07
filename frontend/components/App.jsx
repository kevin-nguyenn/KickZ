import React from "react";
import { Switch, Route } from "react-router-dom"

import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';


const App = () => (
    <div>
        <header>
            <h1>Kickz</h1>
            <GreetingContainer />
        </header>

        <Switch>
            <Route path="/login" component={LogInFormContainer} />
            <Route path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;