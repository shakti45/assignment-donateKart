const { get } = require('axios')
let callExternalApi = async(url) => {
    const response = await get(url)
    return response.data
}

module.exports = {
    callExternalApi
}