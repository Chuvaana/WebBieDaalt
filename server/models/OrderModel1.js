// itemsModel.js
const mongoose = require('mongoose');

// Define schema for the "Items" collection
const orderSchema1 = new mongoose.Schema({
    deliver_phone: Number,
    deliver_email: String,
    product: [{
        name: String,
        quantity: { type: Number, default: 0 }
    }],
    createdAt: { type: Date, default: Date.now },
    order_all_price: String,
    deliver_loc_District: String,
    deliver_loc_Committee: String,
    deliver_location: String,
    delivery_status: String
});

// Create model for the "Items" collection
const Order1 = mongoose.model('Order1', orderSchema1);

module.exports = Order1;
