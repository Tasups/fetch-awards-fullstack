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

module.exports = {
  getPoints,
  addPoints,
  spendPoints
}

