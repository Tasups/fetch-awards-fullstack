const express = require('express')
const router = express.Router()

const {
  getPoints,
  addPoints,
  spendPoints
} = require('../controllers/tasks')

router.route('/').get(getPoints).post(addPoints)
router.route('/spendpoints').patch(spendPoints)

module.exports = router