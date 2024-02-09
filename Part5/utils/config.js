require('dotenv').config()

const PORT = process.env.PORT || 4000
const DATABASE_API = process.env.DATABASE_API

module.exports = {PORT, DATABASE_API}