const Item = require("../models/itemsModel")

/* GET request handler */
const getItem = async (req, res) => {
    try {
        // Query the "Items" collection to retrieve all items
        const items = await Item.find();
        // Respond with the retrieved items
        res.json(items);
        // res.send(items);

    } catch (error) {
        // Handle errors, if any
        console.error("Error fetching items:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

/* POST Request handler */
const addItem = async (req, res) => {
    try {
        const { name, category, type, color, description, price, size, highlights, quantity, sale, saleAmount } = req.body;
        const highlightsArray = highlights.split(",");
        const sizeArray = size.split(",");

        // Create a new item instance using the Item model
        const newItem = new Item({
            name,
            category,
            type,
            color,
            description,
            price,
            size: sizeArray,
            highlights: highlightsArray,
            quantity,
            sale,
            saleAmount,
            // Assuming req.files contain image information
            image: req.files.map(file => ({
                fieldname: file.fieldname,
                originalname: file.originalname,
                encoding: file.encoding,
                mimetype: file.mimetype,
                destination: file.destination,
                filename: file.filename,
                path: `http://localhost:5000/images/${file.filename}`, // Construct the image path here
                size: file.size
            }))
        });

        // Save the new item to the database
        const savedItem = await newItem.save();

        // Respond with success message and the saved item
        res.status(201).json({ message: "Item added successfully", item: savedItem });
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(400).json({ message: "Unable to add item" });
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
    addItem,
    updateItem,
    deleteItem
}