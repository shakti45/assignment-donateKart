const express = require('express')
const campaignRoute = express.Router()
const {campaignController} = require('../controller')

campaignRoute.get('/all',campaignController.getAllCampaigns)
campaignRoute.get('/active',campaignController.getActiveCampaigns)
campaignRoute.get('/closed',campaignController.getClosedCampaigns)

module.exports =  {
    campaignRoute
}