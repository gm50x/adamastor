const express = require('express')

class API {
    constructor() {
        this.app = express()
    }

    configure() {
        this.app.get('/', (req, res) => {
            res.status(200).json({ message: 'Welcome to the API' })
        })
    }

    start() {
        this.app.listen(3000, () => {
            console.log(`The application is listening on localhost:3000`)
        })
    }
}

module.exports = API