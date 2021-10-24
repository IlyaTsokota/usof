const updateURL = (newParams) => {
    if (window.history.pushState) {
        const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        const newUrl = baseUrl + newParams;
        window.history.pushState(null, null, newUrl);
    }
    else {
        console.warn('History API не поддерживает ваш браузер');
    }
};

export default updateURL;