const API = require('./src/infrastructure/web/api')

function app (silent = false) {
    const api = new API(silent)

    api.configure()
    return api.start()

}

if (require.main === module) {
    app()
}

module.exports = app