import { useHistory } from "react-router-dom";
import { ErrorMessage, Field, Form } from "formik";
import { withFormik } from "../hoc";
import React, { memo } from "react";
import ErrorMsg from "../error-message";

const LoginForm = memo(({ isSubmitting, errors, values, setValidationClass, wasError }) => {
    const history = useHistory();

    return (
        <Form className="form">
            {wasError && <ErrorMsg text={'Invalid values!'}/>}
            <div className="input__container">
                <Field type="text" name="name" placeholder="Name" className={setValidationClass(errors.name, values.name)} />
                <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="input__container">
                <Field type="text" name="email" placeholder="Email" className={setValidationClass(errors.email, values.email)} />
                <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="input__container">
                <Field type="password" name="password" placeholder="Password" className={setValidationClass(errors.password, values.password)} />
                <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-submit">
                Sign In
            </button>
            <div className="redirect__btn" onClick={() => history.push('/register')}>
                Sign Up
            </div>
        </Form>
    );
});


export default withFormik({ name: '', email: '', password: '', })(LoginForm);
