const login = (state, resp) => {
    const {user, token} = resp.data;

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);

    return {
        data: user,
        isLogged: true,
    };
};

export default login;
