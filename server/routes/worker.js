const express = require("express")
const router = express.Router()
const cors = require("cors")
const { getItem, loginAuser, addWorker, updateItem, deleteItem } = require("../controllers/workersController")

router.get('/', cors(), getItem)

router.post('/login', loginAuser)
router.post('/add', addWorker)
router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router