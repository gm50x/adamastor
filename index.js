const API = require('./src/infrastructure/web/api')

const api = new API()

api.configure()
api.start()