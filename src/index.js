require('dotenv').config()
require('./config/dbConnection.js')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const routes = require('./routes/routes.js')
require('colors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)




app.listen(port, () => {
    console.log(`Server running on port ${port}`.cyan)
})