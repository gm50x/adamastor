const assert = require('assert')

const API = require('../../src/infrastructure/web/api')

describe('API Class Unit Test Suit', () => {
    it('Should be defined', () => {
        assert.ok(API)
    })

    it('Should be a class', () => {
        assert.ok(API.toString().indexOf('class') !== -1)
    })

    it('Should have a constructor method', () => {
        assert.ok(Object.getOwnPropertyNames(API.prototype).includes('constructor'))
    })

    it ('Should have a configure method', () => {
        assert.ok(Object.getOwnPropertyNames(API.prototype).includes('configure'))
    })

    it('Should have a start method', () => {
        assert.ok(Object.getOwnPropertyNames(API.prototype).includes('start'))
    })

    it('Should have a stop method', () => {
        assert.ok(Object.getOwnPropertyNames(API.prototype).includes('stop'))
    })
})

