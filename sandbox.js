

/* file for testing and running array methods */


scores = [10, 4, 63, 72, 4, 8, 12, 43, 64, 7, 23, 53, 5];

scores2 = scores.filter(score => score > 10);

console.log(scores2);

console.log(scores.map(score => score / 2));

const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 }
];

let newproducts = products.map((product) => {
    if (product.price >= 30) {
        return { name: product.name, price: product.price / 2 }
    }
});

console.log(newproducts);

const fruits = ['apple', 'banana', 'hunaja', 'orange', 'persikka', 'mango'];

const numbers = [10, 100, 20, 30, 40, 70, 60, 200, 0];

maxnumber = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
})

console.log(maxnumber);


const idx = fruits.findIndex((element) => element === 'persikka');
console.log(idx);

numbers.sort((a, b) => b - a);
console.log(numbers);