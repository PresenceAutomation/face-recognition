const post = (url, objectData) => (
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            //'Origin': '',
            //'Host': 'api.producthunt.com'
        },
        body: 'abc'
    })
    .then(response => {
        return response.text()
    })
);

export default post;