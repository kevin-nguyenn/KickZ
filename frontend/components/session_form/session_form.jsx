import React from 'react';

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
            this.props.login(demoUser)
                .then(this.props.history.push("/"));
        } else {
            this.props.processForm(user);
        }
    }

    componentDidMount() {
        document.getElementsByClassName("header-logo")[0].classList.add("hidden");
        document.getElementsByClassName("form-header")[0].classList.remove("hidden");
        document.getElementsByClassName("header-nav")[0].classList.add("hidden");
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
        document.getElementsByClassName("header-nav")[0].classList.add("hidden");
        this.props.clearErrors();
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">

                    <br />

                    Please {this.props.formType} or {this.props.navLink}!
                    {this.renderErrors()}

                    <div className="login-form">

                        <br />

                        <label>
                            <input type="text"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="form-input"
                            />
                        </label>

                        <br />

                        {this.props.formType === "Sign Up" ? 
                            (<label><input type="text"
                                placeholder="Email"
                                className="form-input"
                                value={this.state.email}
                                onChange={this.update('email')}/></label>) : "" 
                        }

                        <br/>

                        <label>
                            <input type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="form-input"
                            />
                        </label>

                        <br />

                        <div className="buttons">
                            <button className="demo-button" onClick={this.handleSubmit}>Demo User Login</button>
                            <button className="session-submit" type="submit" onClick={this.handleSubmit}>{this.props.formType}</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
