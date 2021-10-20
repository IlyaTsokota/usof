const fetchData = ({ service, data, setSubmitting, dispatch, success, fail }) => {
    service(data)
        .then((response) => {
            console.log('Success:', response);
            setSubmitting(false);
            dispatch(success(response));
        })
        .catch((errorData) => {
            console.log('Error: ', errorData);
            setSubmitting(false);
            dispatch(fail(errorData));
        });
};

const fetchDataPromise = ({service, data}) => {
    return new Promise(resolve => {
        resolve(service(data));
    });
}

export {
    fetchData,
    fetchDataPromise,
};