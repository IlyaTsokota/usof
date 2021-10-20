import actionTypes from "ActionTypes";

const defaultData = { isSuccess: false, isError: false };
const loginSuccess = { ...defaultData, isSuccess: true, };
const loginFail = { ...defaultData, isError: true, };

const updateLoginPage = (state, action) => {
    if (state === undefined) {
        return defaultData;
    }

    switch (action.type) {
        case actionTypes.userLoginFail:
            return loginFail;
        case actionTypes.userLoginSuccess:
            return loginSuccess;
        case actionTypes.userLoginSetDefault:
            return defaultData;
        default:
            return state;
    }
};

export default updateLoginPage;