import * as FollowsAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const DELETE_FOLLOW = 'DELETE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

const receiveFollows = follows => ({
    type: RECEIVE_FOLLOWS,
    follows
});

const deletedFollow = shoeId => ({
    type: DELETE_FOLLOW,
    shoeId
});

const receiveFollowErrors = errors => ({
    type: RECEIVE_FOLLOW_ERRORS,
    errors
});

export const fetchFollows = (user_id) => dispatch => {
    return FollowsAPIUtil.fetchFollows(user_id)
        .then(follows => dispatch(receiveFollows(follows)));
}

export const createFollow = id => dispatch => {
    return FollowsAPIUtil.createFollow(id)
        .then(follow => dispatch(receiveFollow(follow)), 
        errors => dispatch(receiveFollowErrors(errors.responseJSON)));
}

export const deleteFollow = id => dispatch => {
    return FollowsAPIUtil.deleteFollow(id)
        .then(() => dispatch(deletedFollow(id)));
}