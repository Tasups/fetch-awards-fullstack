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

const paymentProcess = (array) => {
  // as long as pointsPayment hasn't been paid down/isn't 0 do this
  while (pointsPayment > 0) {
    // iterate through the points array
    for (let i = 0; i < points.length; i++) {
      console.log(points[i].payer, points[i].points)
      // as long as the points to be spent are larger than the points in the array index [i], continue the process
      if (pointsPayment >= points[i].points) {
        // store the difference betweeen the points to be paid and the points in the array index[i]
        let placeHolder = pointsPayment - points[i].points
         // if the remainder >= 0, set points in the array index[i] to 0
        if (placeHolder >= 0) {
          points[i].points = 0
          pointsPayment = placeHolder
          console.log(pointsPayment, points[i].payer, points[i].points)
        } 
        // if points stored are more than the points to be spent, subtract them from the points in the array index[0] and set placeHolder to 0, which later dictates what pointsPayment will be
      } else if (points[i].points > pointsPayment) {
          points[i].points -= pointsPayment
          pointsPayment = 0
          console.log(points[i].payer, points[i].points)
        } 
    }
    return pointsPayment
    // use mongodb call to list out each payer and their aggregate points change
  } 
}

paymentProcess(points)
console.log(pointsPayment, points)
