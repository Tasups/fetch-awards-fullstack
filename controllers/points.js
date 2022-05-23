const Points = require('../models/Points');
const asyncWrapper = require('../middleware/async');

/* GET ALL POINTS BY PAYER THIS ENDPOINT NEEDS TO CHANGE TO LOOK AT ALL THE OBJECTS IN THE DATABASE AND THEN GROUP THEM ALTOGETHER BY PAYER */

const getPoints = asyncWrapper(async (req, res) => {
  const points = await Points.find({}) //this gets all objects from the db now to just filter through them and gather the payers and add the points together
  res.status(200).json({ points })
})

/* ADD POINTS TO THE DATABASE */

const addPoints = asyncWrapper(async (req, res) => {
  const points = await Points.create(req.body)
  res.status(201).json({ points })
})

/* SPEND POINTS FROM OLDEST TO NEWEST */

const spendPoints = asyncWrapper(async (req, res) => {
  const points = await Points.find({}) //this gets all objects from the db now to just filter through them for the oldest points first
  res.status(200).json({ points })
})

/* TEST API FOR AGGREGATING THE POINTS FROM EACH PAYER. WE CAN GET THE AGGREGATE AMOUNT OF POINTS FROM ONE PAYER BY MANUALLY PUTTING IN THE PAYER NAME/VALUE, BUT WE CANNOT DO IT FOR EVERY NAME/VALUE IN THE DATABASE */

const testPoints = asyncWrapper(async (req, res) => {
  const points = await Points.find({ payer: "MILLER COORS" })

  var holder = {};

  points.forEach(function (d) {
    if (holder.hasOwnProperty(d.payer)) {
      holder[d.payer] = holder[d.payer] + d.points;
    } else {
      holder[d.payer] = d.points;
    }
  });

  let payers = [];

  for (var prop in holder) {
    payers.push({ payer: prop, points: holder[prop] });
  }

  console.log(payers);
  res.status(200).json({ payers });
})



module.exports = {
  getPoints,
  addPoints,
  spendPoints,
  testPoints
}

