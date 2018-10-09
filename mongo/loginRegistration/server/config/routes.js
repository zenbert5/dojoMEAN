const ninja = require('../controllers/regNLog.js')

module.exports = (app) => {

    app.get('/', (req, res) => {
        ninja.index(req, res);
    }),
    
    app.post('/register', (req, res) => {
        ninja.register(req, res);
    }),
    
    app.post('/login', (req, res) => {
        ninja.login(req, res);
    })
}