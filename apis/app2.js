const getFruits = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText); //JSON.parse() is used when parsing with XMLHTTPRequests
                resolve(data);
            } else if (request.readyState === 4) {
                reject('could not fetch data');
            }
        });

        request.open('GET', resource);
        request.send();
    });

};

getFruits('./fruits.json').then((data) => {
    console.log('promise 1 resolved ', data);
    return getFruits('./fruits2.json');
}).then((data) => {
    console.log('promise 2 resolved ', data);
    return getFruits('./fruits3.json');
}).then((data) => {
    console.log('promise 3 resolved ', data);
}).catch((err) => {
    console.log('error catched: ', err);
})