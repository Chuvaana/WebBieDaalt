const Item = require("../models/itemsModel")

/* GET request handler */
const getItem = async (req, res) => {
    try {
        // Query the "Items" collection to retrieve all items
        const items = await Item.find();
        // Respond with the retrieved items
        res.json(items);
    } catch (error) {
        // Handle errors, if any
        console.error("Error fetching items:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

/* POST Request handler */
/* POST Request handler */
const addItem = async (req, res) => {
    const highlights = req.body.highlights.split(",");
    const size = req.body.size.split(",");

    /* The request.body must have all these values */
    const item = {
        name: req.body.name,
        category: req.body.category,
        type: req.body.type,
        color: req.body.color,
        description: req.body.description,
        price: req.body.price,
        image: req.files,
        size: size,
        highlights: highlights,
        detail: req.body.detail,
        quantity: req.body.quantity, // Add quantity
        sale: req.body.sale, // Add sale
        saleAmount: req.body.saleAmount // Add saleAmount
    };

    try {
        const newItem = await Item.create(item);
        res.status(201).json({ message: "Item added successfully", newItem });
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(400).json({ message: "Unable to add item" });
    }
};


/* PUT Request handler */
const updateItem = (req, res) => {
    res.json({message: "update Item"})
}

/* DELETE Request handler */
const deleteItem = (req, res) => {
    res.json({message: "delete Item"})
}

module.exports = {
    getItem,
    addItem,
    updateItem,
    deleteItem
}