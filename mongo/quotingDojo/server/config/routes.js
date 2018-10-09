
const quotes = require('../controllers/quotes.js');

module.exports = function (app) {
    app.get('/', function (req, res) {
        quotes.index(req, res);
    })
    
    app.get('/quotes', function (req, res) {
        quotes.display(req, res);
    })
    
    app.post('/quotes', function (req, res) {
        quotes.create(req, res);
    })
}