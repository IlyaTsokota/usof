import React, {useState} from "react";
import './answer-form.scss';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AnswerForm = ({ isLogged, onSubmit}) => {
    const [message, setMessage] = useState('');

    if (!isLogged) {
        return <div className='answer-form'>You need to log in!</div>;
    }

    return (
        <form className='answer-form' onSubmit={(e) => {
            e.preventDefault();
            if (message) {
                onSubmit(message);
                setMessage('');
            }
        }}>
            <CKEditor
                editor={ ClassicEditor }
                data={message}
                config={ {
                    toolbar: [ 'heading', '|', 'bold', 'link', '|', 'undo', 'redo' ],
                    heading: {
                        options: [
                            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        ],
                    },
                    placeholder: 'Write answer...',
                } }
                onChange={ ( event, editor ) => {
                    setMessage(editor.getData().trim());
                } }
            />
            <button type="submit" className="btn btn--text-white btn-blue btn-sm">
                Add answer
            </button>
        </form>
    )
};

export default AnswerForm;