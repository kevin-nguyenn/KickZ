import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const DELETE_USER = 'DELETE_USER';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const deleteUser = userId => ({
    type: DELETE_USER,
    userId
});

export const fetchUser = id => dispatch => {
    return UserAPIUtil.fetchUser(id)
        .then(user => dispatch(receiveUser(user)));
};

export const updateUser = currUser => dispatch => {
    return UserAPIUtil.updateUser(currUser)
        .then(user => dispatch(receiveUser(user)), err => (
            dispatch(receiveUserErrors(err.responseJSON))
        ));
};

export const removeUser = id => dispatch => {
    return UserAPIUtil.deleteUser(id)
        .then(() => dispatch(deleteUser(id)));
};