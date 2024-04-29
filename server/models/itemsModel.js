// itemsModel.js
const mongoose = require('mongoose');

// Define schema for the "Items" collection
const itemSchema = new mongoose.Schema({
    name: String,
    category: String,
    color: String,
    type: String,
    description: String,
    price: Number,
    size: [String],
    highlights: [String],
    image: [{
        fieldname: String,
        originalname: String,
        encoding: String,
        mimetype: String,
        destination: String,
        filename: String,
        path: String,
        size: Number
    }],
    quantity: { type: Number, default: 0 }, // Add quantity field
    sale: { type: Boolean, default: false }, // Add sale field
    saleAmount: { type: Number, default: 0 }, // Add saleAmount field
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Create model for the "Items" collection
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
