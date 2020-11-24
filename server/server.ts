import express = require('express')
import bodyParser = require('body-parser')
import fs = require('fs')
import uuidv1 = require('uuid/v1')

const port = 3001

const app = express()

app.use(bodyParser.json())

app.post('/api/give', function(req, res) {
  const id = uuidv1()
  const { name, email, flightInfo, flightDate, dimensions } = req.body
  const row = JSON.stringify({
    id,
    type: 'give',
    name,
    email,
    flightInfo,
    flightDate,
    dimensions,
  })
  fs.appendFileSync('database', `${row},\n`)
  res.send({ id })
})

app.post('/api/take', function(req, res) {
  const id = uuidv1()
  const {
    name,
    contacts,
    flightInfo,
    flightDate,
    availableSpace,
    availableWeight,
  } = req.body
  const row = JSON.stringify({
    id,
    type: 'take',
    name,
    contacts,
    flightInfo,
    flightDate,
    availableSpace,
    availableWeight,
  })
  fs.appendFileSync('database', `${row},\n`)
  res.send({ id })
})

app.post('/api/cancel', function(req, res) {
  const { id } = req.body
  const row = JSON.stringify({
    id,
    type: 'cancel',
  })
  fs.appendFileSync('database', `${row},\n`)
  res.sendStatus(200)
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
})
