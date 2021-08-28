import actionTypes from "ActionTypes";

const userLogin = (data) => {
    console.log(data);

    return {
        type: actionTypes.userLogin,
        payload: data,
    }
};


export {
    userLogin,
};