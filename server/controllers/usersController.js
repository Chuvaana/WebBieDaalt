const User = require("../models/UserModel")

/* GET request handler */
const loginUser = async (req, res) => {
    const { phoneNumber, password } = req.body;
    User.findOne({ phoneNumber: phoneNumber })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json(user)
                } else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("No record exist")
            }
        })
}

/* POST Request handler */
const addUser = async (req, res) => {
    User.create(req.body)
        .then(employeess => res.json(employees))
        .catch(err => res.json(err))
};

const getUser = async (req, res) => {
    const { phoneNumber } = req.body;
    User.findOne({ phoneNumber: phoneNumber })
        .then(user => {
            if (user) {
                res.json("Success")
            } else {
                res.json("No record exist")
            }
        })
  };
  
const updatePass = async (req, res) => {
    const { email, newpassword } = req.body;
    EmpolyeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                user.password = newpassword;
                user.save();                
                res.json("Password changed successfully");
            } else {
                res.json("No record exist")
            }
        })
  };

/* PUT Request handler */
const updateUser = (req, res) => {
    res.json({ message: "update Item" })
}

/* DELETE Request handler */
const deleteUser = (req, res) => {
    res.json({ message: "delete Item" })
}

module.exports = {
    loginUser,
    addUser,
    getUser,
    updatePass,
    updateUser,
    deleteUser
}