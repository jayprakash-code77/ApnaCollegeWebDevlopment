const mongoose = require("mongoose");

// >>>>>> First method to connect with mongoose
/*
mongoose.connect("mongodb://127.0.0.1:27017/test")
    .then(() => console.log('Connected!'));
*/

// Second method to connect with mongoose

main()
    .then(() => {
        console.log("connection successful!");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
};






// Schema :- Schema defines the shape of the documents within that collection.

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// Models :- Model in mongoose, is a class with which we construct documents.

const User = mongoose.model("User", userSchema); // const nameOfCollection = mongoose.model("nameOfCollection", schemaName);


// Insert >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

const user1 = new User({ name: "Durgavatidevi", email: "durgavati@gmail.com", age: 30 });
const user2 = new User({ name: "Jayprakash", email: "jayprakash@gmail.com", age: 19 });
/*
// 1) Saving data normally
user1.save();
user2.save();
*/

const user3 = new User({ name: "z", email: "family@gmail.com", age: 1000 });

/*
// 2) saving data with proper promises and error handling.
user3
    .save()
    .then((result) => {
        console.log(result); // here result will be the data, that we have created.
    })
    .catch((err) => {
        console.log("Error is :"+err);
    });
*/

/*
// 3) Inserting multiple data at the same time.
User.insertMany([
    {name:"x", email:"love@gmail.com", age:1000},
    {name:"y", email:"helpful@gmail.com", age:1000},
    {name:"z", email:"God@gmail.com", age:100000},
]).then((result) => {
    console.log(result);
});
*/





// Find >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
User.find({} ) // 1)find all the documents in "Users collection".
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Error is :"+err);
    });

*/

/*
User.find({age:{$gt:1000}})  // 2)finding data with conditions
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Error is :"+err);
    })
*/


/*
// Find by Id method.
User.findById("667d9fffa2a2a72195518504")
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Error is :" + err);
    });
*/




// Update >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

/*
// 1) model.updateOne();
User.updateOne({ name: "Jayprakash" }, { age: 18 } )
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Error is :" + err);
    });
*/


/*
// 2) model.updateMany();
User.updateMany({}, { $inc: { age: 1 } })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Error is :" + err);
    });
*/


/*
// 3) model.findOneAndUpdate();
User.findOneAndUpdate({ name: "Family" }, { $inc: { age: 2 }}, {new:true})
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Error is :" + err);
    });
*/







// Delete >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/* // 1) model.deleteOne()
User.deleteOne({name: "x" })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Error is :" + err);
    });
*/


/*
// model.deleteMany();
User.deleteMany({name:"y"})
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log("Error is :"+ err);
});
*/


/*
// Deleting the document and returning the deleted ducument.
// We have more methods like this.
User.findOneAndDelete({ name: "z" },{ new: true })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Error is :" + err);
    });
*/



















