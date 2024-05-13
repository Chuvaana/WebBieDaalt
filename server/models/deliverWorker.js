// itemsModel.js
const mongoose = require('mongoose');

const deliveryTypes = ['Идэвхтэй', 'Идэвхгүй', 'Амарсан'];
// Define schema for the "Items" collection
const deliverSchema = new mongoose.Schema({
    deliver_ovog: String,
    deliver_name: String,
    deliver_rd: String,
    deliver_phone: Number,
    deliver_email: String,
    deliver_address: String,
    deliver_date: Date,
    deliver_type: { type: String, enum: deliveryTypes }, // Using enum to restrict values
    deliver_username: String,
    deliver_password: String
});

// Create model for the "Items" collection
const deliver = mongoose.model('deliver', deliverSchema);

module.exports = deliver;
