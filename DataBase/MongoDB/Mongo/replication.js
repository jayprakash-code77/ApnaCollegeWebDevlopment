/*
// This below code will work of the replica of the database only 
// Solving the problem in the above method Using the "TRANSACTION With Mongoose". >>>>>>>>>>> IMPORTANT >>>>>>>>>>>>>>>>>>>>>>>>>
async function createAuthorAndBook() {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const author = new Author({
            name: "Jayprakash",
            age: 18
        });
        // Save the author with the current session
        await author.save({ session });

        const book = new Book({
            title: "Ultimate Reality Is Death",
            author: author._id
        });
        // Save the book with the current session
        await book.save({ session });

        await session.commitTransaction();
        session.endSession();
        console.log("Document saved successfully!");

    } catch (error) {
        // If an error occurs, abort the transaction
        await session.abortTransaction();
        session.endSession();
        console.log("Error in saving the document :"+error);
    }
}
*/
