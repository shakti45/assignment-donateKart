/*
@param req accepts req
@param res send status with response
@param next acts as error handling callback
get list of all campaigns irrespective of their status
*/
let getAllCampaigns = async (req,res,next) => {
    try{
        res.status(200).send('Donate Kart - All Campaigns')
    } catch (err) {
        next(err)
    }
}
/*
@param req accepts req
@param res send status with response
@param next acts as error handling callback
get list of all active campaigns
*/
let getActiveCampaigns = async (req,res,next) => {
    try{
        res.status(200).send('Donate Kart - Active campaigns')
    } catch (err) {
        next(err)
    }
}
/*
@param req accepts req
@param res send status with response
@param next acts as error handling callback
get list of all closed campaigns
*/
let getClosedCampaigns = async (req,res,next) => {
    try{
        res.status(200).send('Donate Kart - Closed Campaigns')
    } catch (err) {
        next(err)
    }
}
// exporting all controller functions
module.exports = {
    getAllCampaigns,
    getActiveCampaigns,
    getClosedCampaigns      
}