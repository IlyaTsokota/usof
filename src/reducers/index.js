import updateUser from './user';
import updateRegisterPage from "./register-page";
import updateLoginPage from "./login-page";

const reducer = (state, action) => {
    console.log(action);

    return {
        user: updateUser(state, action),
        registerPage: updateRegisterPage(state, action),
        loginPage: updateLoginPage(state, action),
    };
};

export default reducer;