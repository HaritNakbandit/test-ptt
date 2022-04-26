import React, { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
    data: [],
    isAuthenticate: undefined,
    isUser: true,
    limit: 5,
};

const AuthAction = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ADMIN_SUCCESS: 'LOGIN_ADMIN_SUCCESS',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHANGE_LIMIT_USER: "CHANGE_LIMIT_USER"
};


const reducerAuth = (state, action) => {
    switch (action.type) {
        case AuthAction.LOGIN_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.data],
                isAuthenticate: true,
            };
        case AuthAction.LOGIN_ADMIN_SUCCESS:
            return {
                ...state,
                isAuthenticate: true,
                isUser: false
            };

        case AuthAction.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticate: false,
            };
        case AuthAction.CHANGE_LIMIT_USER:
            return {
                ...state,
                limit: action.limit,
            };
        default:
            return state;
    }
};

const AuthContextProvider = props => {
    const [state, dispatchAuth] = useReducer(reducerAuth, initialState);
    return (
        <AuthContext.Provider value={{ ...state, dispatchAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
};


export { AuthContext, AuthContextProvider, AuthAction };
