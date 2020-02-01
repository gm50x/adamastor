const express = require('express')

class API {
    constructor() {
        this.app = express()
    }

    configure() {
        this.app.get('/', (req, res) => {
            res.status(200).json({ message: 'Welcome to the API' })
        })
        this.app.get('/api/v2', (req, res) => {
            res.status(200).json({ message: 'Welcome to the API V2' })
        })
    }

    start() {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log(`The application is listening on localhost:${process.env.PORT || 3000}`)
        })
    }
}

module.exports = API