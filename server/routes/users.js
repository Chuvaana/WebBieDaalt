const express = require("express")
const router = express.Router()
const cors = require("cors")
const {loginUser, addUser,getUser, updatePass, updateUser, deleteUser } = require("../controllers/usersController")

router.post('/login', loginUser)

/* The post request must have a body elemnt with name images */
router.post('/register', addUser)
router.post('/recovery', getUser)
router.post('/changepass', updatePass)

router.delete('/user:id', deleteUser)

module.exports = router