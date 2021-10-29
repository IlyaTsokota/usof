const login = (state, resp) => {
    const {user, token} = resp.data;

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);

    return {
        ...user,
        isLogged: true,
    };
};

export default login;
