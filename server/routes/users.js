const express = require("express")
const router = express.Router()
const cors = require("cors")
const {loginUser, addUser, getUser, recoveryPass, updatePass, updateUser, deleteUser } = require("../controllers/usersController")

router.post('/login', loginUser)
router.post('/register', addUser)
router.post('/recovery', getUser)
router.post('/changepass', recoveryPass) // Here is a typo: should be recoveryPass instead of revoceryPass
router.post('/updatePass', updatePass)
  // Here, use updatePass instead of revoceryPass
router.delete('/user:id', deleteUser)
router.patch('/updateUser', updateUser);


module.exports = router