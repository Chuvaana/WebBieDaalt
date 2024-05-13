const Order = require("../models/orderModel");

/* GET request handler */
const getItem = async (req, res) => {
    try {
        // Query the "Items" collection to retrieve all items
        const items = await Order.find();
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
        // Extracting request body parameters
        const { orderid, product_id, product_code, product_number, order_price, order_all_price, deliver_loc_name, deliver_loc_District, deliver_loc_Committee, deliver_location, deliver_information, deliver_phone, deliver_email } = req.body;

        // Create a new order instance using the Order model
        const newOrder = new Order({
            product_id,
            product_code,
            product_number,
            order_price,
            order_all_price,
            deliver_loc_name,
            deliver_loc_District,
            deliver_loc_Committee,
            deliver_location,
            deliver_information,
            deliver_phone,
            deliver_email
        });

        // Save the new order to the database
        const savedOrder = await newOrder.save();

        // Respond with success message and the saved order
        res.status(201).json({ message: "Order added successfully", order: savedOrder });
    } catch (error) {
        console.error("Error adding order:", error);
        res.status(400).json({ message: "Unable to add order" });
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