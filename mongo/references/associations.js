const PostSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Posts must have a title"] },
    content: { type: String, required: [true, "Posts must have content"] },
}, { timestamps: true })
const BlogSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Blogs must have a title"], minlength: [3, "Titles must have at least 3 characters"] },
    posts: [PostSchema]
}, { timestamps: true })
const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: [true, "A first name is required"] },
    last_name: { type: String, required: [true, "A last name is required"] },
    blogs: [BlogSchema]
}, { timestamps: true })


const Blog = mongoose.model('Blog', BlogSchema);
const User = mongoose.model('User', UserSchema);
Blog.create(req.body, function (err, data) {
    if (err) {
        // handle the error from creating a blog
    }
    else {
        User.findOneAndUpdate({ _id: req.params.id }, { $push: { blogs: data } }, function (err, data) {
            if (err) {
                // handle the error from trying to update the user
            }
            else {
                // it worked! How shall we celebrate?
            }
        })
    }
})    
