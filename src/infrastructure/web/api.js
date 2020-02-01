const express = require('express')

class API {
    constructor(silentMode) {
        this.silentMode = silentMode || false
        this.app = express()
    }

    configure() {
        this.app.get('/', (req, res) => {
            res.status(200).json({ message: 'Welcome to the API' })
        })
        this.app.get('/api/v2', (req, res) => {
            res.status(200).json({ message: 'Welcome to the API V2' })
        })
        this.app.get('/api/v2/foo', (req, res) => {
            res.status(200).json({ message: 'Welcome to the api/v2/foo' })
        })
    }

    start() {
        this.app.listen(process.env.PORT || 3000, () => {
            if (!this.silentMode) {
                console.log(`The application is listening on localhost:${process.env.PORT || 3000}`)
            }
        })
    }
}

module.exports = API