const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = mongoose.connect(`${process.env.DB_DEPLOYED}`)

module.exports = db
