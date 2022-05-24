const mongoose = require('mongoose')

module.exports = mongoose.connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@api-cluster.zqywr.mongodb.net/API-JWT?retryWrites=true&w=majority`
)
    .then( () => {
        console.log('Database Successfully connected'.cyan)
    })
    .catch( (error) => {
        console.log(error)
    })