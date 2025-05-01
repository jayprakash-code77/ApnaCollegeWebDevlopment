const mongoose = require('mongoose');

main().then(() => {
    console.log("Connection successful!!!");
}).
    catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




const userSchema = mongoose.Schema({
    username:String,
    addresses: [
        {
            _id:false,
            location: String,
            city: String,
        },
    ],
});



const User = mongoose.model("User", userSchema);




// this is the example of "One to Few"
const addUser = async() => {
    let user = new User({
        username:"Jayprakash Maurya",
        addresses: [
            {
                location:"Maharashtra",
                city:"Mumbai",
            },
        ],
    });
    user.addresses.push({location:"Uttar Pradesh", city:"Azamgarh"});

    let result = await user.save(); // saving the user
    console.log(result);
};

// addUser();







