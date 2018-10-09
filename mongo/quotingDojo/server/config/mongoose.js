
const mongoose = require('mongoose');

module.export = (() => mongoose.connect('mongodb://localhost/queryDojo', { useNewUrlParser: true }))()
