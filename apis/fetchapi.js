//one of the main differences to XMLHTTPRequests is that the request is rejected only due to 
//network error. In a case of wrong resource name, we would get a resolve with 404

fetch('./fruits.json').then((response) => {
    // console.log('resolved, response: ', response); 

    //with fetch api:s, instead of JSON.parse(response) we use response.json() -method to parse the JSON to JS object, which returns a promise
    return response.json();
}).then((data) => {
    console.log(data);
    return fetch('./fruits2.json');
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})