const express = require("express");
const app = express();
const authMiddleware = require("./MiddleWares/authMiddleware");
const logDetails = require("./MiddleWares/myLoggerMiddleware");
const errorHandle1 = require("./ErrorHandlingMiddleware/errorhadle1");
const MyErrorClass = require("./ErrorClass/class1");

app.use((req, res, next) => {
    let obj = req.query;
    req.query.name = "jp";
    console.log(obj);
    console.log("I am 1st middleware.");
    // res.send("Middleware end.")
    next();
})




//  home work
// app.use("/api", (req, res, next) => {

// })

app.use("/api", (req, res) =>{
    return {
        name:"Jay",
        age:20
    }
})



app.get("/", authMiddleware, (req, res) =>{
    res.send("I am root");
});


app.get("/random", logDetails, (req, res) => {
    res.send("I am random.")
})

app.use("/handErr", (req, res) => {
    ahdjd == djfksdf
})







// custom  classes for error handling. This is the middleware 
let checkPass = (req, res, next) => {
    let pass = req.query.pass;
    if(pass == "12345") {
        next();
        // return;
    }
    
    throw new MyErrorClass(401, "Access Denied!!!");
}
// custom  classes for error handling.
app.get("/customErr", checkPass, (req, res) => {
    res.send("I am a Custom Error!!!");
});



// error handler middlewares 
app.use((err, req, res, next ) => {
    console.log("====Error handle 1====");
    console.log(err);
    
    next(err); // this will call the next middle handler
})
// errorHandle1();
app.use((err, req, res, next ) => {
    console.log("====Error handle 2====");
    console.log(err);
    next();

    // res.send(err);
})





// Important  >>>>>>>>>>>>>>>>>>>>>>>>>>> 
// 1. async error handling 
// 2. asyncWrap
// 3. mongodb error handling 















app.listen(3000, () => {
    console.log("Server listening on port : 3000");
})