const express = require("express");
const app = express();

const ErrorHandle = app.use((err, req, res, next ) => {
    console.log("====Error====");
    console.log(err);
    
    next();
})

module.exports = ErrorHandle;


