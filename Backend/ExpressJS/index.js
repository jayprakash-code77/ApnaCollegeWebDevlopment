const express = require("express");  // this give the function
const app = express(); // this exicution will give some value.
// print the "app object"
// console.dir(app);  // OR Console.log(app);

let port = 8080; // OR 8080

// Methods of "app object that we are requring from express"
// 1) this will listen to the request.
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

/*
// how to send response to a request >>> "app.use" method is used to do that
// "use" is a method of "app" Object.
// (IMPORTANT) "app.use" listens all the command and it will not show that "/connot get ""
app.use((req, res) => {  // "req" and "res" this both are objects having many methods inside them.
    console.log(req);
    console.log("request received");
    res.send("I am fine.") // here we can send Object,json, boolean, integer, string, array, ect.
});
*/



/*
// Routing :- Routing is selecting a path for traffic in a network or between or across multiple networks.
// root path
 app.get('/', function(req, res) {
    res.send("This is a root page.");
 });
//  apple
app.get('/apple', function(req, res) {
    res.send("This is a apple page.");
 });
//  orange
app.get('/orange', function(req, res) {
    res.send("This is a orange page.");
 });

//  if we search for any path which does not exist this code will display costom massage "Path does not exist.".
 app.get('*', (req, res) => {
    res.send("Path does not exist. Please enter a valid path. ");
 })


//  using the post method of "app object"
app.post("/", (req, res) => {
    res.send("You sent a post request!");
});

*/


// Path Parameters >>> 

app.get("/", (req, res) => {
    console.log("Hello i am root.");
});

app.get("/:username/:password", (req, res) => {  // here /:username/:password these are "Path Parameters" 
    console.log(req.params);
    // storing all "Path Parametrs"
    let {username,password} = req.params;
    res.send(`Hello! @${username}`); // Here we can send the HTML code also.
    // res.send("Hello i am not root");
});



// Query String
app.get("/search",(req, res) => {
    console.log(req.query);  // we can also send multiple query request => "search?q=apple&color=red"
    // res.send("No result!");
    // storing queries
    let {q} = req.query;
    // if no query is searched
    if (!q) {
        req.send("Nothing searched!");
    }

    res.send(`Showing result for ${q}`);
    
});





