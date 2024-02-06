// getting all the env in this file
require('dotenv').config()

const database_api = process.env.API_URL
const port = 3000 || process.env.PORT

module.exports = {database_api, port}