const express = require("express")
const router = express.Router()
const cors = require("cors")
const {getContact, addContact} = require("../controllers/contactController")


router.post('/add_contact', addContact)
router.get('/get_contact', getContact)


module.exports = router