import actionTypes from "ActionTypes";
import login from "./login";
import logout from "./logout";
import changePassword from "./change-password";

const updateUser = (state, action) => {
    if (state === undefined) {
        return {
            isLogged: false,
            id: null,
            login: null,
            email: null,
        };
    }

    switch (action.type) {
        case actionTypes.userLogin:
            return login(state.user, action.payload);
        case actionTypes.userLogout:
            return logout(state.user, action.payload);
        case actionTypes.userChangePassword:
            return changePassword(state.user, action.payload);
        default:
            return state.user;
    }
};

export default updateUser;