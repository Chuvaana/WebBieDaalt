const ContactModel = require("../models/ContactModel");

/* POST Request handler */
const addContact = async (req, res) => {
    try {
        // Validate request body
        const { name, phoneNumber, email, addition } = req.body;

        const newContact = await ContactModel.create(req.body);
        res.status(201).json(newContact); // Respond with the created contact
    } catch (error) {
        console.error("Error creating contact:", error);
        res.status(500).json({ error: "Failed to create contact. Please try again." });
    }
};

/* GET Request handler */
const getContact = async (req, res) => {
    try {
        // Query all contacts from the database
        const contacts = await ContactModel.find();
        res.json(contacts); // Respond with the retrieved contacts
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ error: "Failed to fetch contacts. Please try again." });
    }
};

module.exports = {
    addContact,
    getContact
};
