const login = (state, data) => {
    console.log(data);

    return {
        ...state,
        isLogged: true,
    };
};

export default login;
