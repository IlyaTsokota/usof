import actionTypes from "ActionTypes";
import {
    fetchData,
    fetchDataPromise,
} from "../utills/fetch-data";

const userLoginSuccess = (data) => ({ type: actionTypes.userLoginSuccess, payload: data, });
const userLoginFail = () => actionTypes.userLoginFail;
const userLogout = () => actionTypes.userLogout;

const fetchUserLogin = (service) => (data, setSubmitting) => (dispatch) => {
    fetchData({
        service,
        data,
        setSubmitting,
        dispatch,
        success: userLoginSuccess,
        fail: userLoginFail,
    });
};

const setDefault = (type) => (dispatch) => {
    dispatch(type);
};

const userRegisterSuccess =() => actionTypes.userRegisterSuccess;
const userRegisterFail = () => actionTypes.userRegisterFail;

const fetchUserRegister = (service) => (data, setSubmitting) => (dispatch) => {
    fetchData({
        service,
        data,
        setSubmitting,
        dispatch,
        success: userRegisterSuccess,
        fail: userRegisterFail,
    });
};

const fetchUserEmailVerify = (service) => (data) => () => {
    return fetchDataPromise({
        service,
        data,
    });
};

const fetchUserLogout = (service) => (data) => (dispatch) => {
    return fetchDataPromise({
        service,
        data,
    }).then(() => {
        dispatch(userLogout())
    });
};

export {
    fetchUserLogin,
    fetchUserRegister,
    setDefault,
    fetchUserEmailVerify,
    fetchUserLogout,
};
