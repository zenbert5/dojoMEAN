// models
const mongoose = require('mongoose');
const QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1 },
    quote: { type: String, required: true, minlength: 2 },
    quoted_on: Date
});
module.exports = mongoose.model('Quote', QuoteSchema);