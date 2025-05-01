const express = require("express");
const app = express();
const authMiddleware = app.use((req, res, next) => {
    console.log("Hello, I am middleware from middlewares.");
    
    if (req.query.pass == "jay" && req.query.name == "jp") {
        console.log("Password is correct!!");
        next(); // Password is correct, so pass the request to the next middleware
    } else {
        console.log("Password is not correct:");
        res.status(401).send("Incorrect password!!!"); // Send an error response for incorrect password
    }
});


module.exports = authMiddleware;