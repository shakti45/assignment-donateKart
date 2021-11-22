const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//body-parser for req and res
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Sample DonateKart response using express');
})

module.exports = {
    app
}