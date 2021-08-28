import actionTypes from "ActionTypes";
import login from "./login";
import register from "./register";
import logout from "./logout";
import changePassword from "./change-password";

const updateUser = (state, action) => {
    if (state === undefined) {
        return null;
    }

    switch (action.type) {
        case actionTypes.userLogin:
            return login(action.payload);
        case actionTypes.userRegister:
            return register(action.payload);
        case actionTypes.userLogout:
            return logout(action.payload);
        case actionTypes.userChangePassword:
            return changePassword(action.payload);
        default:
            return state.user;
    }
};

export default updateUser;