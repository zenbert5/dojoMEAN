
const wolves = require('../controllers/wolves.js')

module.exports = (app) => {

    app.get('/', (req, res) => {
        wolves.index(req, res);
    })

    // render form to enter a new wolf object
    app.get('/wolves/new', (req, res) => {
        wolves.new(req, res);
    })

    // render 1 wolf object
    app.get('/wolves/:id', (req, res) => {
        wolves.display(req, res);
    })

    // render form to edit wolf
    app.get('/wolves/edit/:id', (req, res) => {
        wolves.edit(req, res);
    })

    // update wolf
    app.post('/wolves/:id', (req, res) => {
        wolves.update(req, res);
    })

    // destroy/delete one object
    app.get('/wolves/destroy/:id', (req, res) => {
        wolves.destroy(req, res);
    })

    // create one object - save to db
    app.post('/wolves', (req, res) => {
        wolves.create(req, res);
    })
}
