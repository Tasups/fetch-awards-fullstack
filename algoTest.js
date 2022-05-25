// maybe consider changing points to the array in the parameter of the function paymentProcess?

const points = [
  {
    payer: "DANNON",
    points: 300,
    createdAt: 1 // createdAt has been changed to reflect their order and simplified
  },
  {
    payer: "UNILEVER",
    points: 200,
    createdAt: 2
  },
  {
    payer:"DANNON",
    points: -200,
    createdAt: 3
  },
  {
    payer: "MILLER COORS",
    points: 10000,
    createdAt: 4
  },
  {
    payer: "DANNON",
    points: 1000,
    createdAt: 5
  }
];

let pointsPayment = 5000;

// store initial array so that the difference can be calculated later and returned
let pointsArrayClone = []
  for (let j = 0; j < points.length; j++) {
    let jObj = {}
    jObj['payer'] = points[j].payer
    jObj['points'] = points[j].points
    pointsArrayClone.push(jObj)
  }

const paymentProcess = (array) => {
  
  // as long as pointsPayment hasn't been paid down/isn't 0 do this
  while (pointsPayment > 0) {
    // iterate through the points array
    for (let i = 0; i < array.length; i++) {
      // console.log(array[i].payer, array[i].points)
      // as long as the points to be spent are larger than the points in the array index [i], continue the process
      if (pointsPayment >= points[i].points) {
        // store the difference betweeen the points to be paid and the points in the array index[i]
        let placeHolder = pointsPayment - points[i].points
         // if the remainder >= 0, set points in the array index[i] to 0
        if (placeHolder >= 0) {
          points[i].points = 0
          pointsPayment = placeHolder
          //console.log(pointsPayment, points[i].payer, points[i].points)
        } 
        // if points stored are more than the points to be spent, subtract them from the points in the array index[0] and set placeHolder to 0, which later dictates what pointsPayment will be
      } else if (points[i].points > pointsPayment) {
          points[i].points -= pointsPayment
          pointsPayment = 0
          //console.log(points[i].payer, points[i].points)
        } 
    }
    return pointsPayment
    // now its time to use this method to get the difference between the two https://stackoverflow.com/questions/51013088/get-the-difference-two-objects-by-subtracting-properties
    // use mongodb call to list out each payer and their aggregate points change
  } 
  
}

paymentProcess(points)

// can't remember why i did this? please help!!! 
// use these websites for clarity: 
// https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript
//https://stackoverflow.com/questions/8217419/how-to-determine-if-javascript-array-contains-an-object-with-an-attribute-that-e
// https://bobbyhadz.com/blog/javascript-add-key-value-pair-to-object
const pointsSpentByPayer = (points, pointsArrayClone) => {
  let resultArray = []
  let payerObj = {}
  for (let i = 0; i < points.length; i++) {
    
  let objPlaceholder = { payer: points[i].payer, points: points[i].points }

    resultArray.hasOwnProperty(points[i].payer) 
      ? console.log('donkey')// add points to the points key where it has this same property
      : resultArray.push(objPlaceholder)
    
    if (!payerObj.hasOwnProperty(points[i].payer)) {
      payerObj['payer'] = points[i].payer;
    }
  }
}



console.log(pointsPayment, points, pointsArrayClone)

if (pointsPayment === 0) {
    console.log("YOU ARE OUT OF POINTS MOTHERFUCKER!!!")
  }
