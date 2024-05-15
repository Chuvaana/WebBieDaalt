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
// const updateItem = async (req, res) => {
//     const itemId = req.params.id;
//     const { name, category, type, color, description, price, size, highlights, quantity, sale, saleAmount } = req.body;

//     try {
//         // Prepare the update data
//         const updateData = {
//             name,
//             category,
//             type,
//             color,
//             description,
//             price,
//             size, // Assuming size is sent as a comma-separated string
//             highlights, // Assuming highlights is sent as a comma-separated string
//             quantity,
//             sale,
//             saleAmount,
//             updatedAt: Date.now()
//         };

//         // Check if there are images to update
//         if (req.files && req.files.length > 0) {
//             updateData.image = req.files.map(file => ({
//                 fieldname: file.fieldname,
//                 originalname: file.originalname,
//                 encoding: file.encoding,
//                 mimetype: file.mimetype,
//                 destination: file.destination,
//                 filename: file.filename,
//                 path: `http://localhost:5000/images/${file.filename}`, // Construct the image path here
//                 size: file.size
//             }));
//         }

//         // Find the item by ID and update it with the new data
//         const updatedItem = await Item.findByIdAndUpdate(itemId, updateData, { new: true });

//         // Check if the item was found and updated
//         if (!updatedItem) {
//             return res.status(404).json({ message: "Item not found" });
//         }

//         // Respond with success message and the updated item
//         res.status(202).json({ message: "Item updated successfully", item: updatedItem });
//     } catch (error) {
//         console.error("Error updating item:", error);
//         res.status(400).json({ message: "Unable to update item" });
//     }
// };
const updateItem = async (req, res) => {
    const itemId = req.params.id;
    const {
      name,
      category,
      type,
      color,
      description,
      price,
      size,
      highlights,
      quantity,
      sale,
      saleAmount
    } = req.body;
  
    try {
      // Prepare the update data
      const updateData = {
        name,
        category,
        type,
        color,
        description,
        price,
        size: size ? size.split(',').map(s => s.trim()) : [], // Convert comma-separated string to array
        highlights: highlights ? highlights.split(',').map(h => h.trim()) : [], // Convert comma-separated string to array
        quantity,
        sale,
        saleAmount,
        updatedAt: Date.now(),
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
      };
  
      // Check if there are images to update
    //   if (req.files && req.files.length > 0) {
    //     updateData.images = req.files.map(file => ({
    //       fieldname: file.fieldname,
    //       originalname: file.originalname,
    //       encoding: file.encoding,
    //       mimetype: file.mimetype,
    //       destination: file.destination,
    //       filename: file.filename,
    //       path: `http://localhost:5000/images/${file.filename}`, // Construct the image path here
    //       size: file.size
    //     }));
    //   }
  
      // Find the item by ID and update it with the new data
      const updatedItem = await Item.findByIdAndUpdate(itemId, updateData, { new: true });
  
      // Check if the item was found and updated
      if (!updatedItem) {
        return res.status(404).json({ message: "Item not found" });
      }
  
      // Respond with success message and the updated item
      res.status(202).json({ message: "Item updated successfully", item: updatedItem });
    } catch (error) {
      console.error("Error updating item:", error);
      res.status(400).json({ message: "Unable to update item" });
    }
  };
/* DELETE Request handler */
const deleteItem = async (req, res) => {
    const itemId = req.params.id;

    try {
        // Find the item by ID and delete it
        const deletedItem = await Item.findByIdAndDelete(itemId);

        // Check if the item was found and deleted
        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        // Respond with success message and the deleted item
        res.json({ message: "Item deleted successfully", item: deletedItem });
    } catch (error) {
        console.error("Error deleting item:", error);
        res.status(500).json({ message: "Unable to delete item" });
    }
};

module.exports = {
    getItem,
    addItem,
    updateItem,
    deleteItem
}