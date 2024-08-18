const mongoose = require("mongoose");

// Estabilising connection!
main()
    .then(() => {
        console.log("Connection successful!");
    })
    .catch((err) => {
        console.log("Error is :" + err);
    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Populate");
};


// Topics to Cover:-

// 1)Basic Population
// 2)Deep Population
// 3)Multiple Paths Population
// 4)Population with Match, Select, and Options
// 5)Dynamic References
// 6)Virtual Population






// 1)Basic Population >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
const AuthorSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const BookSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: "Author"
    }
});
const Author = mongoose.model("Author", AuthorSchema);
const Book = mongoose.model("Book", BookSchema);
*/

/*  
// PROBLEM :::>>>>>>>>> In this example first the author will be saved and then book will be saved, so if any error occures during saving the book, the author will be saved and book will not get saved reated to that author.
const author = new Author({
    name: "Maa",
    age: 30
});
author
    .save()
    .then((result) => {
        const book = new Book({ title: "Life of Child", author: author._id });
        book.save();
    })
    .catch((err) => {
        console.log(err);
    });

    Book.findOne({ title: "Life of Child" })
    .populate("author")
    .exec()
    .then(book => {
        console.log(book.author.name); // 'John Doe'
        console.log(book.title);
    })
    .catch(err => {
        handleError(err);
    });
*/

//(Solving problem in the above code) creating and saving author only if the book is saved.
async function createAuthorAndBook() {
    try {
        const author = new Author({
            name: "Jayprakash",
            age: 18
        });

        // Save the author
        const savedAuthor = await author.save();

        const book = new Book({
            title: "Ultimate Reality Is Death",
            author: savedAuthor._id
        });

        // Try to save the book
        await book.save();

        console.log("Author and book saved successfully");
    } catch (err) {
        console.log("Error in saving the book. :" + err);
        // If there's an error, delete the author
        if (author._id) {
            await Author.findByIdAndDelete(author._id);
        }
    }
}

// calling function to create the author with related book
// createAuthorAndBook(); // IMPORTANT>>>>>>>>>>

/*
Book.findOne({title:"Ultimate Reality Is Death"})
    .populate("author")
    .exec()
    .then(book => {
        console.log(book.author.name); // 'John Doe'
        console.log(book.title);
    })
    .catch(err => {
        handleError(err);
    });
*/

















// 3)Multiple Paths Population >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
// Author Schema
const AuthorSchema = new mongoose.Schema({
    name: String,
    age: Number
});
// Publisher Schema
const PublisherSchema = new mongoose.Schema({
    name: String,
    location: String
});
// book schema
const BookSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: "Author"
    },
    publisher: {
        type: mongoose.Schema.ObjectId,
        ref: "Publisher"
    }
});

const Author = mongoose.model("Author", AuthorSchema);
const Publisher = mongoose.model("Publisher", PublisherSchema);
const Book = mongoose.model("Book", BookSchema);

async function createAuthorAndBookWithPublisher() {
    let author, publisher; // Declare variables to hold created documents
    try {
        author = new Author({
            name: "Jayprakash",
            age: 18
        });
        // Save the author
        const savedAuthor = await author.save();

        publisher = new Publisher({
            name: "Geeta Press",
            location: "Banarash"
        });
        // Save the publisher
        const savedPublisher = await publisher.save();

        const book = new Book({
            title: "Truth Experience!",
            author: savedAuthor._id,
            publisher: savedPublisher._id
        });

        // Save the book
        await book.save();

        console.log("Author, publisher, and book saved successfully");
    } catch (err) {
        console.error("Error in saving the book: " + err);

        // Cleanup: Delete author if it was created
        if (typeof author !== 'undefined' && author._id) {
            await Author.findByIdAndDelete(author._id);
        };
        // Cleanup: Delete publisher if it was created
        if (typeof publisher !== 'undefined' && publisher._id) {
            await Publisher.findByIdAndDelete(publisher._id);
        };
    };
};

// calling the function to create the book with Author And Publisher
// createAuthorAndBookWithPublisher(); // IMPORTANT>>>>>>>>>>

// populating
Book.findOne({ title: "Truth Experience!" })
    .populate("author")
    .populate("publisher")
    // .setOptions({ strictPopulate: false }) // this also done to avoide Strict Population error.
    .exec()
    .then(book => {
        console.log(book.publisher);
        console.log(book.author);
        console.log(book.publisher);
    })
    .catch((error) => {
        console.log("Error is :" + error);
    });
*/



// 2)Deep Population >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Deep population is used when you have nested references and want to populate multiple levels.

// Capital Schema
const CapitalSchema = mongoose.Schema({
    name: String,
});
// Country Schema
const CountrySchema = mongoose.Schema({
    name: String,
    capital: {
        type: mongoose.Schema.ObjectId,
        ref: "Capital"
    }
});
// country With number of State
const countryWithCountState = mongoose.Schema({
    numberOfState: Number,
    country: {
        type: mongoose.Schema.ObjectId,
        ref: "Country"
    }
});

const Country = mongoose.model("Country", CountrySchema);
const Capital = mongoose.model("Capital", CapitalSchema);
const NumOfState = mongoose.model("NumOfState", countryWithCountState);



async function createCountry(Name, numbOfState, CapitalOfCountry) {
    let capital, country;
    try {
        capital = new Capital({
            name: CapitalOfCountry
        });
        const savedCapital = await capital.save();

        country = new Country({
            name: Name,
            capital: savedCapital._id
        });
        const savedCountry = await country.save();

        const countryNumState = new NumOfState({
            numberOfState: numbOfState,
            country: savedCountry._id
        });
        await countryNumState.save();


    } catch (error) {
        if (typeof capital !== "undefined" && capital._id) {
            await Country.findByIdAndDelete(capital._id);
        }
        if (typeof country !== "undefined" && country._id) {
            await Country.findByIdAndDelete(country._id);
        }

        console.log("Problem in storing the country details.");
    }
};

// createCountry("India", 29, "New Delhi"); // IMPORTANT>>>>>>>>>>

/*
// populating
NumOfState.findOne({ numberOfState: 29 })
    .populate({
        path: "country",
        populate: {
            path: "capital"
        }
    })
    .exec()
    .then(numberOfState => {
        console.log(numberOfState.numberOfState);
        console.log(numberOfState.country);
        console.log(numberOfState.country.capital);
    })
    .catch(err => {
        handleError(err);
    });

*/








/*
// 4) Population with Match, Select, and Options >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

NumOfState.findOne({ numberOfState: 29 })
    .populate({
        path: "country",
        populate: {
            path: 'capital',
            match: { name: { $exists: true } }, // Example filter
            select: 'name -_id',
            options: { limit: 1 } // Example option
        },
        select: 'name -_id',
    })
    .exec()
    .then(numberOfState => {
        console.log(numberOfState.numberOfState);
        console.log(numberOfState.country);
        console.log(numberOfState.country.capital);
    })
    .catch(err => {
        handleError(err);
    });
*/






























































