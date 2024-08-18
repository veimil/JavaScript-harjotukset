
const getSomething = () => {
    return new Promise((resolve, reject) => {
        //resolve and reject are part of the functionality of a promise-object which is created here
        // resolve('some data');
        reject('rejection data');
    })
}

// getSomething().then((data) => {
    //the first callback inside .then-method is corresponding to resolve, the second to reject
//     console.log('resolved, data: ', data);
// }, (err) => {
//     console.log('rejected, data: ', err);
// })

// alternative way (more intuitive)

getSomething().then((data) => {
    console.log('resolved, data: ', data);
}).catch((err) => {
    console.log('rejected, error data: ', err);
})

//THE FOLLOWING FUNCTION COULD BE INCLUDED IN SIMILAR FORMAT THAN GETSOMETHING, WHERE WE WOULD EITHER RESOLVE
//THE REQUEST OR REJECT IT BASED ON THE LOGIC WE ARE IMPLEMENTING IN THE FUNCTION (app2.js)
const getFruits = (callback) => {
    //the original request method in JS before JSON was used
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText); //JSON.parse() is used when parsing with XMLHTTPRequests
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    })
    
    request.open('GET', './fruits.json');
    request.send();
}

console.log(1);
console.log(2);

getFruits((err, data) => {
    err === undefined ? console.log(data, typeof data) : console.log(err);
})


console.log(3);
console.log(4);

