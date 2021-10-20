import React from 'react';
import { Formik } from 'formik';
import validate from 'Utils/validate';
import FullPageLoader from "../full-page-loader";

const setValidationClass = (isError, value) => value === '' ? '' : isError ? 'error__field' : 'success__field';

const withFormik = (initialValues) => (Form) => {
    return ({ formSubmit, isError, ...props }) => {

        return (
            <div className="form__container">
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true);
                        formSubmit(values, setSubmitting);
                    }}
                >
                    {
                        (params) => (
                            <>
                                {params.isSubmitting && <FullPageLoader />}
                                <Form {...props} {...params} setValidationClass={setValidationClass} />
                            </>
                        )
                    }
                </Formik>
            </div >
        );
    }
};


export default withFormik;

