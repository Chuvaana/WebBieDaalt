const express = require("express")
const router = express.Router()
const cors = require("cors")
const uploadPhoto = require("../middlewares/upload")
const { getItem, addItem, updateItem, deleteItem } = require("../controllers/itemsController")

router.get('/', cors(), getItem)

/* The post request must have a body elemnt with name images */
router.post('/add', uploadPhoto.array('images'), addItem)
// router.post('/add',  getOrder)
// router.post('/add', addWorker)
router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router