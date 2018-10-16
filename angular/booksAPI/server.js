/*
 * MEAN angular - Shinto Coins 
 * oct 15, 2018
 * shawn chen
 * codingDojo SJ
 * 
 *  v1.0 - oct 12, 2018
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/coins/dist/coins'));

app.listen(8000, function () {
    console.log("Shinto Coins running.. listening on port 8000");
})

mongoose.connect('mongodb://localhost/authors', { useNewUrlParser: true });
const authorSchema = new mongoose.Schema({
    first_name: { type: String, required: [true, 'First name cannot be empty'], minlength: [2, 'Name must be 2 characters or longer'] },
    last_name: { type: String, required: [true, 'Last name cannot be empty'], minlength: [2, 'Name must be 2 characters or longer'] },
    birthday: { type: Date, required: [true, 'Birthday must be provided'] },
    country: { type: String, required: [true, 'Country cannot be empty'], minlength: [3, 'Country of origin must be at least 3 characters'] },
    books: [
        { title: { type: String, required: [true, 'Title of book cannot be empty']},
            year: { type: String, required: [true, 'Year cannot be empty'] } }
    ]
}, { timestamps: true })

const Author = mongoose.model('authors', authorSchema);

// welcome page
// handle by angular

// show all authors
app.get('/authors', (req, res) => {
    Author.find({}, (err, docs) => {
        res.json(docs)
    }).sort({ createdAt: -1 });
})

// show books by author (id)
app.get('/author/:id/books', (req, res) => {
    Author.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            console.log('Error occurred with fetching all books by author');
            let errResponse = {
                status: false,
                error: err
            }
            res.json(errResponse);
        } else {
            let books = data['books'];
            console.log(`Data returned from books fetch by author id (result) ==> ${data['books']}`);
            res.json(books);
        }
    })
})

// create author
app.post('/author/create', (req, res) => {
    // data validation before creation
    var today = new Date;
    var todayFormatted = JSON.stringify(today).slice(1,11);
    var userDate = JSON.stringify(req.body.birthday).slice(1,11);
    console.log(`New Author's birthday inputted by user -> ${userDate}`);
    console.log(`Today's Date -> ${todayFormatted}`);
    if (userDate > todayFormatted) {
        let errResponse = {
            status: false,
            error: 'Birthday must be in the past'
        }
        res.json(errResponse);
    } else {
        Author.create(req.body, (err, data) => {
            if (err) {
                console.log('Error occurred with creating an author');
                let errResponse = {
                    status: false,
                    error: err
                }
                res.json(errResponse);
            } else {
                console.log('Author creation successful');
                res.json(data);
            }
        })
    }
})


// create(add) a book by author
app.post('/author/:id/addBook', (req, res) => {
    // data validation before insertion
    Author.updateOne({ _id: req.params.id }, { $push: { books: { title: req.body.title, year: req.body.year } } }, (err, data) => {
        if (err) {
            console.log('Error occurred with adding a book');
            let errResponse = {
                status: false,
                error: err
            }
            res.json(errResponse);
        } else {
            console.log('Book insertion successful');
            res.json(data);
        }
    })
})


// update a book by author
app.put('/author/:id/updateAuthor', (req, res) => {
    // data validation required - validate req.body dict can be passed to $set as coded below
    Author.updateOne({ _id: req.params.id }, { $set: req.body }, (err, data) => {
        if (err) {
            console.log(`Error updating author id ${req.params.id}`);
            let errResponse = {
                status: false,
                error: err
            }
            res.json(errResponse);
        } else {
            console.log('Author successfully updated');
            res.json(data);
        }
    })
})


// delete a book
app.delete('/deleteBook/:id/author/:aid', (req, res) => {
    Author.findByIdAndUpdate(req.params.aid, { $pull: { books: {_id: req.params.id}}}, (err, data) => {
        if (err) {
            console.log(`Error deleting book ${req.params.id}`);
            let errResponse = {
                status: false,
                error: err
            }
            res.json(errResponse);
        } else {
            console.log('Book successfully expunged');
            res.json(data);
        }
    })
})


// delete an author
app.delete('/author/:id/delete', (req, res) => {
    Author.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            console.log(`Error deleting author ${req.params.id}`);
            let errResponse = {
                status: false,
                error: err
            }
            res.json(errResponse);
        } else {
            console.log('Author successfully deleted');
            res.json(data);
        }
    })
})