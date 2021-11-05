import { useHistory } from "react-router-dom";
import { ErrorMessage, Field, Form } from "formik";
import { withFormik } from "../hoc";
import React, {memo, useEffect, useState} from "react";
import ErrorMsg from "../error-message";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {fetchDataPromise} from "Actions/utills/fetch-data";
import FullPageLoader from "../full-page-loader";

const QuestionForm = memo(({ usofService, isSubmitting, errors, values, setValidationClass, wasError }) => {
    const history = useHistory();
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetchDataPromise({
            service: usofService.getCategories,
            data: null,
        }).then((response) => {
            setCategories(response.data);
        });
    }, [usofService]);

    return !categories ? <FullPageLoader /> :
        (
                <Form className="form">
                    {wasError && <ErrorMsg text={'Invalid values!'}/>}
                    <div className="input__container">
                        <Field type="text" name="title" placeholder="Title" className={setValidationClass(errors.title, values.title)} />
                        <ErrorMessage name="title" component="div" className="error" />
                    </div>
                    <div className="input__container">
                        <Field
                            type="text"
                            name='category'
                            render={({ field, form }) => {
                                return (
                                    <>
                                        <select
                                            name="category"
                                            value={field.value}
                                            style={{ display: 'block' }}
                                            onChange={( e )=> {
                                                form.setFieldValue(field.name, e.target.value);
                                            }}
                                        >
                                            {
                                                categories.map(({ name, id }) => {
                                                    return <option key={id} value={id} label={name} />;
                                                })
                                            }
                                        </select>
                                    </>
                                )
                            }}
                        />
                    </div>
                    <div className="input__container">
                        <Field
                            type="text"
                            name='body'
                            render={({ field, form }) => {
                                return (
                                    <>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={field.value}
                                            config={ {
                                                toolbar: [ 'heading', '|', 'bold', 'link', '|', 'undo', 'redo' ],
                                                heading: {
                                                    options: [
                                                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                                    ],
                                                },
                                                placeholder: 'Write question...',
                                            } }
                                            onChange={( event, editor )=> {
                                                form.setFieldValue(field.name, editor.getData());
                                            }}
                                        />
                                    </>
                                )
                            }}
                        />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn-submit">
                        Create
                    </button>
                    <div className="redirect__btn" onClick={() => history.goBack()}>
                        Back
                    </div>
                </Form>
        );
});


export default withFormik({ title: '',category: '',  body: '', })(QuestionForm);
