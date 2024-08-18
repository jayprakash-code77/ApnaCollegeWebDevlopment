const express = require("express");
const app = express();
const port = 8080;
const mySQL = require("mysql2");
// port
const path = require("path");
const { v4: uuidv4 } = require('uuid'); // this will create the unique ID's . to generate id's we just have to write "uuidv4();"  uuidv4 = this is just a variable we can change it where we are requiring the "uuid".

const methodOverride = require("method-override");



app.use(express.urlencoded({ extended: true })); // this is there to understand the url encoded data.
app.use(methodOverride("_method"));


// middlewares
app.set("view engine", "ejs");  // setting the view engine as "ejs".
app.set("views", path.join(__dirname, "views")); // setting path for "views" folder.
app.set(express.static(path.join(__dirname, "public"))); // setting path for "public" folder.

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public/CSS"))); //this is important to use static files out of the parent directory.
app.use(express.static(path.join(__dirname, "public/JS")));  // 



// making connection with data base.
const connection = mySQL.createConnection({
    host: "localhost",
    user: "root",
    database: "blogposts",
    password: "2006@jayshriM"
});





// variable array that contains post data.
let posts = [
    {
        id: uuidv4(),
        username: "Jay",
        content: "Ask, Believe and Receive."
    },

    {
        id: uuidv4(),
        username: "Beena",
        content: "I love food."
    },

    {
        id: uuidv4(),
        username: "Raju",
        content: "Bussiness is the best job I prefer."
    }
]



// rout for the main OR home page
app.get("/posts", (req, res) => {

    let q = "Select * from users";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render("index.ejs", { result });
        });
    } catch (error) {
        console.log(error);
    }
});



// rout to create the new post
app.get("/posts/new", (req, res) => {
    res.render("newPost.ejs");
});
// route to add data to your database(posts array) and redirect.
app.post("/posts", (req, res) => {
    let { username, content } = req.body; // taking data from form and storing it.
    let id = uuidv4();
    let data = [[id, username, content]];
    let q = "INSERT INTO users (id, username, content) VALUES ?";
    try {
        connection.query(q, [data], (err, result) => {
            if (err) throw err;
            res.redirect("/posts");
        });
    } catch (error) {
        console.log(error);
    }
});



// route to see the post in detail
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM users WHERE id= ?`;

    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            let data = result[0];
            res.render("viewFullPost.ejs", { data });

        });
    } catch (error) {
        console.log(error);
    }
});



// route to render the edit post form.
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM users WHERE id= ?`;

    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            let data = result[0];
            res.render("editPost.ejs", { data });
        });
    } catch (error) {
        console.log(error);
    }
});
// Route to edit post
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let q = "UPDATE users SET content = ? WHERE id = ?";
    try {
        connection.query(q, [newContent, id], (err, result) => {
            if (err) throw err;
            res.redirect("/posts");
        });
    } catch (error) {
        console.log(error);
    }
});





// route to delete the post. This uses the form to create the DELETE request.
/*
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    let q = "DELETE FROM users WHERE id= ?";

    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            res.redirect("/posts");
        })
    } catch (error) {
        console.log(error);
    }
});
*/

// Route to delete post. This uses "JAVASCRIPT" to create the DELETE request.
app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    const q = "DELETE FROM users WHERE id = ?";
    connection.query(q, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error deleting post.");
            return;
        }
        res.status(204).send(); // No content, but indicates success
    });
});




app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});