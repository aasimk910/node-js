const mongoose = require('mongoose');

// Define the schema for the blog
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
});

// Create the model from the schema
const Blog = mongoose.model('Blog', blogSchema);

// Export the model
module.exports = Blog;
