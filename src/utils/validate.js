const messages = {
    required: 'Required!',
    mustBeSomeCharacters: (count, isBiggest) => `Must be ${count} characters or ${isBiggest ? 'biggest' : 'less'}!`,
    weakPassword: 'Weak password!',
    invalidEmail: 'Invalid email address!',
    passwordMismatch: 'Password mismatch!',
};

const validate = values => {
    const errors = {};

    if (typeof values.name === 'string') {
        if (!values.name) {
            errors.name = messages.required;
        } else if (values.name.length < 4) {
            errors.name = messages.mustBeSomeCharacters(4, true);
        } else if (values.name.length > 25) {
            errors.name = messages.mustBeSomeCharacters(25);
        }
    }

    if (typeof values.password === 'string') {
        if (!values.password) {
            errors.password = messages.required;
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(values.password)) {
            errors.password = messages.weakPassword;
        }
    }

    if (typeof values.email === 'string') {
        if (!values.email) {
            errors.email = messages.required;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = messages.invalidEmail;
        }
    }

    if (typeof values.password_confirmation === 'string') {
        if (!values.password_confirmation) {
            errors.password_confirmation = messages.required;
        } else if (values.password_confirmation !== values.password) {
            errors.password_confirmation = messages.passwordMismatch;
        }
    }

    return errors;
};

export default validate;