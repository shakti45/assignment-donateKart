
const dotenv  = require('dotenv').config()

const node_env = process.NODE_ENV
const port = process.env.PORT

module.exports = {
    env : node_env, 
    port : port 
}
