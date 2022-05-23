const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url,
    // IS THIS NOW DEPRECATED? AS OF 05/23/22 IT SEEMS SO!!!
    // {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true
    // }
  )
}

module.exports = connectDB;

