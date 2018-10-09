const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: { 
        type: String, 
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
        required: [true, 'Name cannot be empty'] 
    },
    first_name: { 
        type: String, 
        required: [true, 'Comment must be entered'], 
        minlength: [2, 'Two or more characters required'] 
    },
    last_name: { 
        type: String, 
        required: [true, 'Comment must be entered'], 
        minlength: [2, 'Two or more characters required'] 
    },
    password: { 
        type: String, 
        required: [true, 'Comment must be entered'], 
        minlength: [8, 'Password must be at least 8 characters'] 
    },
    birthday: { 
        type: Date, 
        required: [true, 'Birthday must be provided'] 
    },
}, { timestamps: true });

mongoose.model('User', userSchema);