import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    onSubmit() {
        e.preventDefault();
        this.props.action(this.state);
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div>
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>

                        <br/>

                        <label>Password:
                            <input type="password" 
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>

                        <br/>

                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />

                        </label>
                    </div>
                </form>
            </div>
        )
    }
};

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        navLink: <Link to="/login">Log In</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
