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

// let previousChart =  {BWP: 1, ZAR: 1.3, USD: 0.09324, number: 1};
// let currentChart = {BWP: 1.25, ZAR: 1.35, USD: 0.01, number: 2};

// let newObj = Object.keys(previousChart).reduce((a, k) => {
//     a[k] = previousChart[k] - currentChart[k];
//     return a;
// }, {});

// console.log(newObj);

let array1 = [
    {
        payer: "Miller Coors",
        points: 10000
    }
];

let array2 = [
    {
        pointsOwed: 5700
    }
];

if (array1.length != array2.length) {
  res.send("there is an error!");
}

for (let i = 0; i < array1.length; i++) {
  const payerPoints = { points: array1[i].points };
  const pointsAvailable = { points: array2[i].pointsOwed };
  const difference = {
      difference1: payerPoints.points - pointsAvailable.points,
      difference2: pointsAvailable.points - payerPoints.points
  };
  console.log(difference);
}




