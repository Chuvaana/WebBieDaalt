// itemsModel.js
const mongoose = require('mongoose');

// Define schema for the "Items" collection
const deliverSchema = new mongoose.Schema({
    deliver_ovog: String,
    deliver_name: String,
    deliver_rd: String,
    deliver_phone: Number,
    deliver_email: String,
    deliver_address: String,
    deliver_date: Date,
    deliver_type: String
});

// Create model for the "Items" collection
const deliver = mongoose.model('deliver', deliverSchema);

module.exports = deliver;
