const mongoose = require('mongoose');
const { Schema } = mongoose;
main().then(() => {
    console.log("Connection successful!!!");
}).
    catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const oderSchema = new mongoose.Schema({
    item: String,
    price: Number,
});

const customerSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order", // Corrected ref value
        }
    ]
})

// creating the model of both, Order and Customer
const Order = mongoose.model("Order", oderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addOrders = async () => {
    let newOrder = new Order(
        { item: "Banana", price: 60, }
    );

    let res = await newOrder.save();
    console.log(res);
    return res;
}

const addCustomer = async () => {
    let cus = new Customer({
        name: "raju",
        orders:[]
    });

    try {
        let result = await addOrders();
        cus.orders.push(result._id);

        let res = await cus.save();
        console.log(res);

    } catch (error) {
        console.error("Error adding customer:", error);
    }
};

// addCustomer();

const findCustomerAndPopulate = async (customerId) => {
    try {
        const customer = await Customer.findById(customerId).populate("orders");
        if (customer) {
            console.log("Customer with populated orders:", customer);
        } else {
            console.log("Customer not found.");
        }
    } catch (error) {
        console.error("Error finding and populating customer:", error);
    }
};

// Example usage: Replace '68015a78b4dc853a538e840a' with an actual Customer ObjectId
findCustomerAndPopulate('68015e45f52f5444a3fc8481');