const { ok } = require('assert')

describe('Foo test suit', () => {
    it('Should simple pass the Foo test', () => {
        ok(false)
    })

    for (let i = 0; i < 30; i++) {
        it(`Should pass 30 times> [${i + 1}/30]`, () => {
            ok(true);
        })
    }
})
