// routes/order.js

const express = require("express");
const router = express.Router();
const { getItem, getOrder, updateItem, deleteItem } = require("../controllers/orderController");

router.get('/getOrder', getItem);
router.post('/add', getOrder);
router.patch('/changeStatus', updateItem); // Ensure this matches your frontend endpoint
router.delete('/:id', deleteItem);

module.exports = router;
