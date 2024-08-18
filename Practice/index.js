const express = require("express");
const app = express();

const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/Info", (req, res) => {
    res.send("My name is Jayprakash Maurya");
});

app.get("/:username/:password",(req, res) => {
    let {username, password} = req.params;
    res.send(`<h1>Hello ${username} </h1>`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



