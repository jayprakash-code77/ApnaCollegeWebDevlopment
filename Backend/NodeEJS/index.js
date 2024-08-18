const express = require("express");

const app = express();
// We are requiring "path" package to use it;
const path = require("path");

// port 
const port = 8080;

// EJS >>> Embedded JavaScript Templates 
// to install "EJS" we have to write command >>> ("npm i ejs") >>> in terminal
// EJS is a simple templeting language that lets you generate HTML markup with plain Javascript.





app.set("view engine","ejs"); // to use "EJS" we have to write this line.  // here we used "ejs" without doing "require()" because express already requires "ejs" //
// setting "views directory path"
app.set("views", path.join(__dirname, "/views")); // >>> __dirname = backend/NodeEJS,  >>> Here we are joining two paths (backend/NodeEJS + /views) and we are telling "Express" to search "views folder" on this joined path.

app.get("/",(req , res) => {
    // res.send("This is root.")  // with this "send" command, we are sending some text/object/html/array etc. in response.
    res.render("Home.ejs"); // with this "render" command, we are sending big files in response.   // we can also write like this >>> res.render("Home");
});



app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});






// >>>>>>>>>>>>>>>>>> Interpolation Syntax  <<<<<<<<<<<<<<<<<<<<<<<< //
// Interpolation refers to the embedding expressions into marked up text. Similar to "String Litterals" >>> Using "EJS" we will make dynamic HTML.



// >>>>>>>>>>>>>>>>>>  Passing Data to EJS  <<<<<<<<<<<<<<<<<<<<<<<< //
// 

// rout for roll dice page

app.get("/rollDice",(req , res) => {
    // assume this data comming from DataBase
    let diceVal = Math.floor(Math.random() * 6) + 1;
    // res.render("RollDiceTem.ejs", {diceVal}); // first way to write
    // res.render("RollDiceTem.ejs", {data : diceVal}); // second way to write
    res.render("RollDiceTem.ejs", {diceVal : diceVal}); // third way to write >>> Key and Value can be same.

});




// rout for conditional stattements 
/* // this file will be commented when rout of "putDataFromDatajson.ejs" is working
app.get("/conditionals/:username", (req, res) => {
    let followers = ["Jay", "Deepu", "Raju"];
    let {username} = req.params;
    res.render("ConditionalStatement.ejs", {username, followers});
})
*/





// rout for putDataFromDatajson.ejs

app.get("/ig/:username", (req, res) => {
    // requiring "data.json" file
    const instaData = require("./data.json");
    let {username } = req.params;

    const data = instaData[username];

    if (data) {
        res.render("putDataFromDatajson.ejs", {data});
    }else{
        res.render("error.ejs", {username});

        
    }
    
});



// app.use(express.static("public"));   >>> this line is really IMPORTANT if we want to use static files like CSS or Javascript files.     {middleware = express.static("public") }

// FIRST WAY TO RUN SATATIC FILES FROM PARENT DIRECTORY
// this line is used for "Serving static files" 
// express.static.mime.types['css'] = 'text/css';  >>> not important for now
app.use(express.static("public"));  // >>>>>>> public will be as it is / IT CAN ALSO BE CHANGED BUT WE HAVE TO USE EXTRA FUNCTION FOR THAT.

// SECOND WAY TO RUN STATIC FILES FROM OTHER DIRECTORY
// If we run file that is is being "served static files", from out of the parent directory we have to "Set path for the static file (public)".
app.use(express.static(path.join(__dirname,"public/CSS")));
app.use(express.static(path.join(__dirname,"public/JS")));




// IMPORTANT >>> "Includes". 
// to use "incluede" we have to make file named "includes" inside the "views" folder, which is present inside the parent folder.

// rout for "ExampleOfIncludes" 
app.get("/insta/:user",(req, res) => {
    // requiring "data.json" file
    const dataBase = require("./data.json");
    let {user} = req.params;

    const actualData = dataBase[user];

    if (actualData) {
        res.render("ExampleOfIncludes.ejs", {actualData});
    } else {
        res.render("error.ejs",{user});
    }
})





