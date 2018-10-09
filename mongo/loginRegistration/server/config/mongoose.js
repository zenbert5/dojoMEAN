

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginRegister', { useNewUrlParser: true });
const path = require('path');
const fs = require('fs');

const models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach((file) => {
    if (file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
})