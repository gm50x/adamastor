const assert = require('assert')
const app = require('../../index')

let server = {}

describe('Application Wide Integration Test Suit', () => {
    it('Should run without throwing', () => {
        server = app(silent = true)
    })

    after(() => {
        server.close()
    })
})