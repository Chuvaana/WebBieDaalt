const Order1 = require("../models/OrderModel1");

/* GET request handler */
const getItem = async (req, res) => {
    try {
        // Query the "Items" collection to retrieve all items
        const items = await Order1.find();
        // Respond with the retrieved items
        res.json(items);
        // res.send(items);

    } catch (error) {
        // Handle errors, if any
        console.error("Error fetching items:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getOrder = async (req, res) => {
    try {
        // Extract data from the request body
        const { deliver_phone, deliver_email, product, order_all_price, deliver_loc_District, deliver_loc_Committee, deliver_location } = req.body;

        // Create a new order instance
        const newOrder = new Order1({
            deliver_phone,
            deliver_email,
            product,
            order_all_price,
            deliver_loc_District,
            deliver_loc_Committee,
            deliver_location,
            delivery_status: "Баталгаажсан"
        });

        // Save the new order to the database
        const savedOrder = await newOrder.save();

        // Respond with the saved order
        res.status(201).json(savedOrder);
    } catch (err) {
        // If an error occurs, send an error response
        res.status(500).json({ message: err.message });
    }
};




/* PUT Request handler */
const updateItem = (req, res) => {
    res.json({ message: "update Item" })
}

/* DELETE Request handler */
const deleteItem = (req, res) => {
    res.json({ message: "delete Item" })
}

module.exports = {
    getItem,
    getOrder,
    updateItem,
    deleteItem
}