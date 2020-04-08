import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/session_actions';
import FormContainer from './form';

const mapStateToProps = ({ errors, ownProps }) => {
    return {
        errors: errors.session,
        currentUser: {
            username: "",
            email: "",
            id: "",
            name: ""
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
