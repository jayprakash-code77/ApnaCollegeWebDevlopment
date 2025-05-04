const express = require("express");
const app = express();
const CookieParser = require("cookie-parser");

// middleware to parse the cookies
app.use(CookieParser("secretcode")); // secret code is used to uncode the signed-cookies


app.get("/posts", (req, res) => {
    res.send("Display all posts :");
})



// set cookies
app.get("/posts/setCookies", (req, res) => {
    let obj = {
        name:"Jayprakash",
        age:20
    }
    res.cookie("name", "Jayprakash Maurya");
    res.cookie("detail", obj);
    res.send("Cookies are set");
})



// get cookies
app.get("/posts/getCookie", (req, res) => {
    console.log(req.cookies); // this will print "undefined" if we don't use "cookie-parser" package of npm.
    res.send("Got all cookies. Check the console.");
})


// set signed cookies
app.get("/posts/setSignedcookies", (req, res) => {
    res.cookie("password", "sonam7772006kori", {signed:true});
    res.send("Signed cookies are stored. Get all signed cookies at : /posts/getSignedcookies");
    
})

// get signed cookies
app.get("/posts/getSignedcookies", (req, res) => {
    console.log("Signed Cookies :", req.signedCookies);
    res.send("Got all signed cookies :");
})


app.listen(3000, () => {
    console.log("Server running on PORT : 3000");
})