const express = require('express')
const router = express.Router()

const {
  getPoints,
  addPoints,
  spendPoints
} = require('../controllers/points')

router.route('/').get(getPoints).post(addPoints)
router.route('/spendpoints').patch(spendPoints)

module.exports = router