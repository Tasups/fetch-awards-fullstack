const Points = require('../models/Points');
const asyncWrapper = require('../middleware/async');

/* GET ALL POINTS BY PAYER THIS ENDPOINT NEEDS TO CHANGE TO LOOK AT ALL THE OBJECTS IN THE DATABASE AND THEN GROUP THEM ALTOGETHER BY PAYER AND SUM UP POINTS BY PAYER */
/* DONE 05/23/22 1306 */

const getPoints = asyncWrapper(async (req, res) => {
  const points = await Points.find({});
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

/* ADD POINTS TO THE DATABASE */
// DONE 05/23/22 1308

const addPoints = asyncWrapper(async (req, res) => {
  const points = await Points.create(req.body)
  res.status(201).json({ points })
})

/* SPEND POINTS FROM OLDEST TO NEWEST */

const spendPoints = asyncWrapper(async (req, res) => {
  const points = await Points.find({}) //this gets all objects from the db now to just filter through them for the oldest points first
  res.status(200).json({ points })
})

/* TEST API  */

const testPoints = asyncWrapper(async (req, res) => {
  res.status(200).send('ready for another test api to be developed');
})



module.exports = {
  getPoints,
  addPoints,
  spendPoints,
  testPoints
}

