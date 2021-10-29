import actionTypes from "ActionTypes";
import login from "./login";
import logout from "./logout";
import changePassword from "./change-password";

const updateUser = (state, action) => {
    if (state === undefined) {
        const user = JSON.parse(localStorage.getItem('user'));

        return {
            isLogged: !!user || false,
            data: user,
        };
    }

    switch (action.type) {
        case actionTypes.userLoginSuccess:
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