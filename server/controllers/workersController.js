// const Item = require("../models/itemsModel")

const Worker = require("../models/deliverWorker")
/* GET request handler */

const loginAuser = async (req, res) => {
    const { deliver_username, deliver_password } = req.body;
    Worker.findOne({ deliver_username: deliver_username })
        .then(user => {
            if (user) {
                if (user.deliver_password === deliver_password) {
                    res.json(user)
                } else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("No record exist")
            }
        })
}

const getItem = async (req, res) => {
    try {
        // Query the "Items" collection to retrieve all items
        const items = await Worker.find();
        // Respond with the retrieved items
        res.json(items);
        // res.send(items);

    } catch (error) {
        // Handle errors, if any
        console.error("Error fetching items:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


const addWorker = async (req, res) => {
    try {
        const { deliver_ovog,
            deliver_name,
            deliver_rd,
            deliver_phone,
            deliver_email,
            deliver_address,
            deliver_date,
            deliver_type ,
            deliver_username,
            deliver_password} = req.body

        const newWorker = new Worker({
            deliver_ovog,
            deliver_name,
            deliver_rd,
            deliver_phone,
            deliver_email,
            deliver_address,
            deliver_date,
            deliver_type,
            deliver_username,
            deliver_password
        });
        const savedWorker = await newWorker.save();

        // Respond with success message and the saved order
        res.status(201).json({ message: "Order added successfully", order: savedWorker });
    } catch (err) {
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
    loginAuser,
    addWorker,
    updateItem,
    deleteItem
}