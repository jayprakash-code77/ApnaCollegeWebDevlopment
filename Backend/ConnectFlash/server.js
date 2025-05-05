const express = require("express");
const app = express();
const flash = require("connect-flash");
const path = require("path");
const session = require("express-session");
const { log } = require("console");

// middleware to use the "ejs"
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));


// middleware for session
const sessionOptions = {
    secret:"mysupersecretkey",
    resave:false,
    saveUninitialized: true
}
app.use(session(sessionOptions));

// middleware for "connect-flash"
app.use(flash());








app.get("/register", (req, res) => {
    let { name = "anonymouse"} = req.query;
    req.session.name = name; 
    req.flash("success", "User registered successfully!!!"); // creating the flash message with {key:value} pair
    res.redirect("/greet")
})

app.get("/greet", (req, res) => {
    res.render("flash.ejs", {name: req.session.name, msg:req.flash("success")}); // excessign and passing the flash message as "msg" {msg:req.flash("success")}
})




// middleware for setting the local variable 
app.use((req, res, next) => {
    res.locals.errorMessage = req.flash("success"); // using the "res.locals" to store the flash messages 
    res.locals.successMessage = req.flash("error"); // using the "res.locals" to store the flash messages 

    next();
});


// using the local variable for the same work
app.get("/signup", (req, res) => {
    let {user = "Unknown"} = req.query;

    // setting the message based on the user 
    if(user == "Unknown") {
        req.flash("error", "User not signed up");
    }else{
        req.flash("success", "User signed up successfully!!!");
    }
    req.session.user = user;   

    res.redirect("/logged");
})
app.get("/logged", (req, res) => {
    // res.locals.errorMessage = req.flash("success"); // using the "res.locals" to store the flash messages >>>>>>>>>>>. This same work can be done by thw above middleware " TO SET LOCAL VARIABLES"
    // res.locals.successMessage = req.flash("error"); // using the "res.locals" to store the flash messages 
    res.render("useLocals.ejs", {user:req.session.user});
})





// const PORT = 3000;
app.listen(3000, () => {
    // console.log(`Server is running o PORT: ${PORT}`);
    console.log("Server running on port: 3000");
    
})