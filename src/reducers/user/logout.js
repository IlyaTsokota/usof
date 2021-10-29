const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    return {
        isLogged: false,
    };
};
export default logout;