const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {campaign} = require('../../routes')

//body-parser for req and res
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
app.use(bodyParser.json())

app.use('/campaigns',campaign)

module.exports = {
    app
}