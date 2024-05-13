// itemsModel.js
const mongoose = require('mongoose');

// Define schema for the "Items" collection
const orderSchema = new mongoose.Schema({
    product_id: [String],
    product_code: [String],
    product_number: [String],
    order_price: String,
    order_all_price: String,
    deliver_loc_name: String,
    deliver_loc_District: String,
    deliver_loc_Committee: String,
    deliver_location: String,
    deliver_information: String,
    deliver_phone: Number,
    deliver_email: String
});

// Create model for the "Items" collection
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
