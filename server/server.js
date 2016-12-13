var express = require('express')
var app = express()
var path = require('path')


app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
})

var port = 3000

app.listen(port, function () {
  console.log('Running on port ', port)
})