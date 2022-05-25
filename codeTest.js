// var arr = [];
// var fruits = ['banana', 'apple', 'mango'];
// var label = 'Fruits';

// for(var i = 0; i < fruits.length; i++) {
//     var obj = {};
//     obj['data'] = fruits[i];
//     obj['label'] = label;
//     arr.push(obj);
// }

// console.log(arr);

let previousChart =  {BWP: 1, ZAR: 1.3, USD: 0.09324, number: 1};
let currentChart = {BWP: 1.25, ZAR: 1.35, USD: 0.01, number: 2};

let newObj = Object.keys(previousChart).reduce((a, k) => {
    a[k] = previousChart[k] - currentChart[k];
    return a;
}, {});

console.log(newObj);

