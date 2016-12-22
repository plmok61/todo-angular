require('dotenv').config({silent: true})
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./routes/routes')
const morgan = require('morgan')
const app = express()
const http = require('http').Server(app)
const port = 3000

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTION")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../client')))
app.use('/', router)

const server = http.listen(port)
console.log(`Server is running on port ${port}`)