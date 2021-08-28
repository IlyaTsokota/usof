import React from 'react';
import Title from '../title';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from 'Actions';

const validate = values => {
    const errors = {};

    if (!values.login) {
        errors.login = 'Required';
    } else if (values.login.length < 4) {
        errors.login = 'Must be 4 characters or biggest!';
    } else if (values.login.length > 25) {
        errors.login = 'Must be 25 characters or less!';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(values.password)) {
        errors.password = 'Weak password!';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const addError = (isError, value) => value === '' ? '' : isError ? 'error__field' : 'success__field';

const LoginPage = ({ error, user, userLogin }) => {
    const history = useHistory();

    // if (isLogged) {
    //     history.push('/');
    //     return;
    // }

    return (
        <div className="page page__content-center">
            <div className="form__container">
                <Title text="Sign In" />
                <Formik
                    initialValues={{ login: '', email: '', password: '', }}
                    validate={validate}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            userLogin(values);
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting, errors, values }) => (
                        <Form className="form">
                            <div className="input__container">
                                <Field type="login" name="login" placeholder="Login" className={addError(errors.login, values.login)} />
                                <ErrorMessage name="login" component="div" className="error" />
                            </div>
                            <div className="input__container">
                                <Field type="text" name="email" placeholder="Email" className={addError(errors.email, values.email)} />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div className="input__container">
                                <Field type="password" name="password" placeholder="Password" className={addError(errors.password, values.password)} />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="btn-submit">
                                Sign In
                            </button>
                            <div className="redirect__btn" onClick={() => history.push('/register')}>
                                Sign Up
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

const mapStateToProps = ({ user }) => {
    return { user };
};

const mapDispatchToProps = (dispatch) => {
    return { userLogin: (data) => dispatch(userLogin(data)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

