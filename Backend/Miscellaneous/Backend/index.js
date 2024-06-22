const express = require("express");

const app = express();

const port = 8080;

// This is IMPORTANT to "Store and Print data in the body of POST".
app.use(express.urlencoded({extended:true}));// This is IMPORTANT to "Store and Print data in the body of POST".


// GET request >>> in get request we  
app.get("/register", (req, res) => { 
    // printing data of in query string.
    console.log(req.query);
    // storing and using data in "query string".
    let {user, password} = req.query;
    res.send(`Standard POST response. Welcome ${user}`);
});


// POST request >>> in post request we send and accept data in post body. 
app.post("/register", (req, res) => { 
    // printing data of post body
    // console.log(req.body);  // this will print undefined when we have not used >>> {app.use(express.urlencoded({extended:true}));} this line .
    
    const {user, password} = req.body; // this will work only if we have add this line or middleware >>>  {app.use(express.urlencoded({extended:true}));}
    res.send(`Standard POST response. Welcome ${user}`);
    // res.send("This is ex. of POST");
});








app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});