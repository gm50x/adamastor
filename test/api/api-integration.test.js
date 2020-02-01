const assert = require('assert')

const API = require('../../src/infrastructure/web/api')
const http = require('http')

describe('API Integration Test Suit', () => {
    before(() => {
        const api = new API(true)
        api.configure()
        api.start()
    })
    it('Should respond with a status code 200 for successful requests on /', async () => {
        const req = http.get(`http://localhost:${process.env.PORT || 3000}`, (res) => {
            assert.ok(res.statusCode === 200)
        })
    })
    it('Should respond with a status code 200 for successful requests on /api/v2', async () => {
        const req = http.get(`http://localhost:${process.env.PORT || 3000}/api/v2`, (res) => {
            assert.ok(res.statusCode === 200)
        })
    })
    it('Should respond with a status code 200 for successful requests on /api/v2/foo', async () => {
        const req = http.get(`http://localhost:${process.env.PORT || 3000}/api/v2/foo`, (res) => {
            assert.ok(res.statusCode === 200)
        })
    })
    it('Should respond with a status code 404 for requests on /api/v2/not-found-route', async () => {
        const req = http.get(`http://localhost:${process.env.PORT || 3000}/api/v2/not-found-route`, (res) => {
            assert.ok(res.statusCode === 404)
        })
    })
    after(() => {
        process.exit()
    })
})