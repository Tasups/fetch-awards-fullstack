const mongoose = require('mongoose')

const pointsSchema = new mongoose.Schema({
  payer: {
    type: String,
    required: [true, 'payer must be provided']
  },
  points: {
    type: Number,
    required: [true, 'points must be provided']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Points', pointsSchema)