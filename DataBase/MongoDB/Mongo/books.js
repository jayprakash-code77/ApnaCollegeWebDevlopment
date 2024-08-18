const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connection successful!");
    })
    .catch((err) => console.log(err));
    
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
};



const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        uppercase: true,
        unique: true
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [0, "Price cannot be less that Zero."], // this massage is the custom error if the value is less than 0. It can be used with with every constraint.
    },
    category:{
        type: String,
        enum:["non-friction","friction"], // this will check if the value entered is matching the any value present in the array(enum).
    }
});

const Book = mongoose.model("Book", bookSchema);

const book1 = new Book({
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: "230",
    category: "Motivation"
});
/*
book1
    .save()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
*/


/*
// If we will update the document of any book then the Schema will not work, So inorder to make Schema validation while updating values we have to set option "runValidator: true". 
// example:
Book.findByIdAndUpdate("667eeb420f76a152fabc033f",{price:-1}, {runValidators:true})
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log("Error is :"+err);
});
*/




const book2 = new Book({
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: -1,
    category: "Motivation"
});


book2
    .save()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("This is normal error:- "+err);
        console.log("This is object of error:- "+err.errors);
        console.log("This is object of specific key's error:- "+err.errors.price);
        console.log("This is object of specific key's property error:- "+err.errors.price.properties);
        console.log("This is object of specific key's property massage error:- "+err.errors.price.properties.message);
    });






