import { AuthAction } from "./auth_context";

export const loginSuccess = (dispatch, data) => {
    return dispatch({
        type: AuthAction.LOGIN_SUCCESS,
        data,
    });
};

export const loginAdminSuccess = (dispatch, data) => {
    return dispatch({
        type: AuthAction.LOGIN_ADMIN_SUCCESS,
        data,
    });
};

export const logoutSuccess = (dispatch, data) => {
    return dispatch({
        type: AuthAction.LOGOUT_SUCCESS,
        data,
    });
};

export const changeLimitUser = (dispatch, limit) => {
    return dispatch({
        type: AuthAction.CHANGE_LIMIT_USER,
        limit,
    });
};

