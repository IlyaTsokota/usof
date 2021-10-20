import actionTypes from "ActionTypes";

const defaultData =  { isSuccess: false, isError: false, };
const registerSuccess = { ...defaultData, isSuccess: true, };
const registerFail = { ...defaultData, isError: true, };

const updateRegisterPage = (state, action) => {
    if (state === undefined) {
        return defaultData;
    }

    switch (action.type) {
        case actionTypes.userRegisterFail:
            return registerFail;
        case actionTypes.userRegisterSuccess:
            return registerSuccess;
        case actionTypes.userRegisterSetDefault:
            return defaultData;
        default:
            return state;
    }
};

export default updateRegisterPage;