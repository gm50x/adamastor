const { ok } = require('assert')

describe('Bar (async) test suit', () => {
    function resolver(i = 1) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true)
            }, i * 100)
        })
    }

    for (let i = 0; i < 10; i++) {
        it('Should simple pass the Bar test', async () => {
            const res = await resolver()
            ok(res)
        })
    }
})