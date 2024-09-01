
// using async & await instead promise chaining
// when we use a method that is asynchronous in nature, we can make a function containing the asychronous method using async & await, making the function asynchronous itself
// the await-keyword stalls the code inside the function, until a response or error is received, but the function call to our asynchronous function is non-blocking
// since the function is asynchronous
// if we throw an error inside our async function, the promise is rejected


const getFruits = async () => {

    let arr = [];

    let response = await fetch('./fruits.json');
    if (response.status !== 200){
        throw new Error('error fetching a resource');
    }
    let fruits = await response.json();
    arr = arr.concat(fruits);

    response = await fetch('./fruits2.json');
    if (response.status !== 200){
        throw new Error('error fetching a resource');
    }
    fruits = await response.json();
    arr = arr.concat(fruits);

    response = await fetch('./fruits3.json');
    if (response.status !== 200){
        throw new Error('error fetching a resource');
    }
    fruits = await response.json();
    arr = arr.concat(fruits);

    return arr;
}

getFruits()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));