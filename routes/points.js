const express = require('express')
const router = express.Router()

const {
  getPoints,
  addPoints,
  spendPoints,
  testPoints
} = require('../controllers/points')

router.route('/').get(getPoints).post(addPoints)
router.route('/spendpoints').patch(spendPoints)
router.route('/testpoints').get(testPoints)

module.exports = router