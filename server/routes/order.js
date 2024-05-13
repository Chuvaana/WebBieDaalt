const express = require("express")
const router = express.Router()
const cors = require("cors")
const { getItem,getOrder, updateItem, deleteItem } = require("../controllers/orderController")

router.get('/', cors(), getItem)

router.post('/add', getOrder)
router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router