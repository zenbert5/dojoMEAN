
const mongoose = require('mongoose');
const WolvesSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    size: String,
    color: String,
    created_on: Date
})
mongoose.model('Wolves', WolvesSchema);