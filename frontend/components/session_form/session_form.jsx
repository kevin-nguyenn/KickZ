import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        const demoUser = {
            username: 'demouser',
            password: 'password'
        };

        if (e.target.innerHTML === "Demo User Login") {
            this.props.login(demoUser);
        } else {
            this.props.processForm(user);
        }
    }

    componentDidMount() {
        document.getElementsByClassName("header-logo")[0].classList.add("hidden");
        document.getElementsByClassName("form-header")[0].classList.remove("hidden");
        document.getElementsByClassName("header-nav")[0].classList.add("hidden");
        document.getElementsByClassName("search-background")[0].classList.add("hidden");

        //hiding and adding logos/nav-bar/background img for auth forms
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        document.getElementsByClassName("header-logo")[0].classList.remove("hidden");
        document.getElementsByClassName("form-header")[0].classList.add("hidden");
        document.getElementsByClassName("header-nav")[0].classList.remove("hidden");
        document.getElementsByClassName("search-background")[0].classList.remove("hidden");
        this.props.clearErrors();
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">

                    <div className='switch-form-buttons'>
                        {/* work on disabling button and figure out way to make 
                        buttons stationary */}
                        <button className="switch-form-tab">
                            <a>{this.props.formType}</a>
                        </button>
                        <button className="switch-form-tab">
                            {this.props.navLink}
                        </button>
                        {/* <div>Log In
                            <Link to="/login"></Link>
                        </div>
                        <div>Sign Up
                            <Link to="/signup"></Link>
                        </div> */}
                    </div>
                    {this.renderErrors()}

                    <button className="demo-button" onClick={this.handleSubmit}>
                        Demo User Login
                    </button>
                    {/* get divider line with 'or' after demo button */}

                    <div className="login-form">

                        <label>
                            <input type="text"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="form-input"
                            />
                        </label>

                        {this.props.formType === "Sign Up" ? 
                            (<label><input type="text"
                                placeholder="Email"
                                className="form-input"
                                value={this.state.email}
                                onChange={this.update('email')}/></label>) : "" 
                        }

                        <label>
                            <input type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="form-input"
                            />
                        </label>

                        <div className="buttons">
                            <input className="session-submit" type="submit" 
                                onClick={this.handleSubmit} 
                                value={this.props.formType}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
