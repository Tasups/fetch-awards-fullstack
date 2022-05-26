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

let pointsLeft = [
  { payer: "DANNON", points: 0, createdAt: 1 },
  { payer: "UNILEVER", points: 0, createdAt: 2 },
  { payer: "DANNON", points: 0, createdAt: 3 },
  { payer: "MILLER COORS", points: 5300, createdAt: 4 },
  { payer: "DANNON", points: 1000, createdAt: 5 },
];

let originalPoints = [
  { payer: "DANNON", points: 300 },
  { payer: "UNILEVER", points: 200 },
  { payer: "DANNON", points: -200 },
  { payer: "MILLER COORS", points: 10000 },
  { payer: "DANNON", points: 1000 },
];

// This would be used to check that both arrays are the same length
// if (array1.length != array2.length) {
//   res.send("there is an error!");
// }

for (let i = 0; i < pointsLeft.length; i++) {
  const payerPoints = { points: pointsLeft[i].points };
  const pointsAvailable = { points: originalPoints[i].points };
  const difference = {
    difference1: payerPoints.points - pointsAvailable.points,
    difference2: pointsAvailable.points - payerPoints.points,
  };
  console.log(difference);
}




