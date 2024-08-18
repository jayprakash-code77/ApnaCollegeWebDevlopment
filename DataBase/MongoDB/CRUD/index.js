const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/BlogMongoose", {}).then(() => {
    console.log("Connected to MongoDB.");
}).catch(error => {
    console.error("Failed to connect to MongoDB. :" + error);
});

const blogSchema = new mongoose.Schema({
    title: String,
    authorName: String,
}, {
    timestamps: true
});
const Blog = mongoose.model("Blog", blogSchema);

// const blog = new Blog({
//     title: "The Business Man",
//     authorName: "Jayprakash Maurya",
// });


// adding more properties to Schema 
blogSchema.add({
    topic: String,
});

const blog = new Blog({
    title: "The Business Man",
    authorName: "Jayprakash Maurya",
    topic:"Business Logic"
});
blog.save();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});