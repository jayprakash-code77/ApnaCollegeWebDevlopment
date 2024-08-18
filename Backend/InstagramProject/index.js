const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.set("views engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get( "/",(req , res) => {
    // res.send("I am root.") // This can send only arrays,integer values, objects ect.
    res.render("Home.ejs");
});

// app.get("/ig/:username", (req, res ) => {
//     let {username} = req.params; 
//     res.render("Insta.ejs", {username});
// });


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


app.get("/ig/:username", (req, res) => {

    let followers = ["Jay", "Deepu", "Raju"]; // data comming from database
    
    let {username} = req.params;
    res.render("Insta.ejs", {username, followers});
})