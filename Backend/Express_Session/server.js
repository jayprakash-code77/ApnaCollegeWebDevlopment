const express = require("express");
const app = express();
const ExpressSession = require("express-session");

const sessionOptions = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}

// session middleware
app.use(ExpressSession(sessionOptions));







// storing the session : store the data {name} comming from request query (/register?name="Jayprakash")
app.get("/register", (req, res) => {
    let {name = "anonymouse"} = req.query;
    req.session.name = name;
    res.redirect("/greet");
})
// greet rout
app.get("/greet", (req, res) => {
    res.send(`Hello, ${req.session.name}!`);
})






















// count the number of request
app.get("/coutSessionReq", (req, res) => {
    if(req.session.count) {
        req.session.count++;
    }else{
        req.session.count = 1
    }

    res.send(`You have send ${req.session.count} request.`);
})
// creating the session
app.get("/sess", (req, res) => {
    res.send("Session is created!!!");
})




app.listen(3000, () => {
    console.log("Server listning on PORT : 3000");
})