const express = require('express')
const campaign = express()
const {campaignRoute} = require('./campaignRoute')

campaign.use('/list',campaignRoute)

module.exports = {
    campaign
}