// import { connect } from 'react-redux';
// import { login } from '../../actions/session_actions';
// import { clearErrors } from '../../actions/session_actions';
import React from 'react';
// import { withRouter } from 'react-router-dom';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);

        console.log('***** constructor: ' + window.location.hash);
        this.state = {
            activeTab: window.location.hash,
            loginUser: {
                username: '',
                password: ''
            },
            signupUser: {
                username: '',
                password: '',
                email: ''
            }
        };

        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
        this.handleLoginUsernameBlur = this.handleLoginUsernameBlur.bind(this);
        this.handleLoginPasswordBlur = this.handleLoginPasswordBlur.bind(this);
        this.handleSignupUsernameBlur = this.handleSignupUsernameBlur.bind(this);
        this.handleSignupPasswordBlur = this.handleSignupPasswordBlur.bind(this);
        this.handleSignupEmailBlur = this.handleSignupEmailBlur.bind(this);
        this.handleDemoClick = this.handleDemoClick.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleTabClick(e) {
        e.preventDefault();
        const tabId = e.target.id;
        // console.log('tab clicks: ' + e.target.id);

        if (tabId === 'loginTabLink') {
            window.location.hash = '#/login';
            this.setState({
                activeTab: window.location.hash
            });
        } else if (tabId === 'signupTabLink') {
            window.location.hash = '#/signup';
            this.setState({
                activeTab: window.location.hash
            });
        }
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    handleLoginSubmit(e) {
        // e.preventDefault();
        const { loginUser } = this.state;
        // console.log('******* submit login');
        dispatch(login(loginUser));
    }

    handleSignupSubmit(e) {
        // e.preventDefault();
        const { signupUser } = this.state;
        // console.log('******* submit sign up')
        dispatch(signup(signupUser));
    }

    handleLoginUsernameBlur(e) {
        const { loginUser } = this.state;
        this.setState({
            loginUser: {
                username: e.target.value,
                password: loginUser.password
            }
        })
    }
    
    handleLoginPasswordBlur(e) {
        const { loginUser } = this.state;
        this.setState({
            loginUser: {
                username: loginUser.username,
                password: e.target.value
            }
        });
    }

    handleSignupUsernameBlur(e) {
        const { signupUser } = this.state;
        this.setState({
            signupUser: {
                username: e.target.value,
                password: signupUser.password,
                email: signupUser.email
            }
        });
    }

    handleSignupPasswordBlur(e) {
        const { signupUser } = this.state;
        this.setState({
            signupUser: {
                username: signupUser.username,
                password: e.target.value,
                email: signupUser.email
            }
        });
    }

    handleSignupEmailBlur(e) {
        const { signupUser } = this.state;
        this.setState({
            signupUser: {
                username: signupUser.username,
                password: signupUser.password,
                email: e.target.value
            }
        });
    }

    handleDemoClick(e) {
        // console.log('******* demo clicked');
        const demoUser = {
            username: 'demouser',
            password: 'password'
        };

        // dispatch(login(demoUser));
        this.props.login(demoUser);
        this.props.history.push("/profile");
    }

    renderLogin() {
        return (
            <form className="loginContent">
                <input 
                    type="text" 
                    placeholder="Username" 
                    defaultValue=''
                    className="form-input"
                    onBlur={this.handleLoginUsernameBlur}
                />
                <input 
                    type="password"
                    placeholder="Password" 
                    defaultValue=''
                    className="form-input"
                    onBlur={this.handleLoginPasswordBlur}
                />
                <button className="form-submit" onClick={this.handleLoginSubmit}>
                    Submit
                </button>
            </form>
        )
    }

    renderSignup() {
        return (
            <form className="signupContent">
                <input
                    type="text"
                    placeholder="Username"
                    defaultValue=''
                    className="form-input"
                    onChange={this.handleSignupUsernameBlur}
                />
                <input
                    type="text"
                    placeholder="Email"
                    defaultValue=''
                    className="form-input"
                    onChange={this.handleSignupEmailBlur}
                />
                <input
                    type="password"
                    placeholder="Password"
                    defaultValue=''
                    className="form-input"
                    onChange={this.handleSignupPasswordBlur}
                />
                <button className="form-submit" onClick={this.handleSignupSubmit}>
                    Submit
                </button>
            </form>
        )
    }


    render() {
        const { activeTab } = this.state;
        // console.log('***** render: ' + JSON.stringify(this.state));
        if (!(this.props.location.pathname === '/login' || this.props.location.pathname === '/signup')) {
            return null;
        }
        
        return (
            <div>
                <header className="form-logo">
                    <a href="/" className="form-header-logo">
                        Kick
                        <a href="/" className="form-z">Z</a>
                    </a>
                    {/* renders auth form logo */}
                </header>
                <div className="form-container">
                    {/* <form onSubmit={this.handleSubmit} className="login-form-box"> */}
                    <div className="login-form-box">
                        <div className='tabLinks'>
                            <button id="loginTabLink" className="login-tablink" onClick={this.handleTabClick}>
                                Log In
                            </button>
                            <button id="signupTabLink" className="signup-tablink" onClick={this.handleTabClick}>
                                Sign Up
                            </button>
                        </div>
                        {/* {this.renderErrors()} */}

                        <button className="demo-button" onClick={this.handleDemoClick}>
                            Demo User Login
                        </button>
                        {/* get divider line with 'or' after demo button */}

                        <div className="tabContent">
                            {activeTab === '#/login' ?
                                this.renderLogin() : this.renderSignup()
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormContainer;

