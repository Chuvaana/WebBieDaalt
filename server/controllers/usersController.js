const User = require("../models/UserModel")

const getData = async (req, res) =>{
    try {
        // Query the "Items" collection to retrieve all items
        const items = await User.find();
        // Respond with the retrieved items
        res.json(items);
        // res.send(items);

    } catch (error) {
        // Handle errors, if any
        console.error("Error fetching items:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

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
                res.json(user)
            } else {
                res.json("No record exist")
            }
        })
};

const updatePass = async (req, res) => {
    const { phoneNumber, oldpassword, newpassword } = req.body;
    User.findOne({ phoneNumber: phoneNumber })
        .then(user => {
            if (user) {
                if (user.password === oldpassword) {
                    user.password = newpassword;
                    user.save();
                    res.json("Password changed successfully");
                } else {
                    res.json("Нууц үг буруу байна")
                }
            } else {
                res.json("No record exist")
            }
        })
};
const recoveryPass = async (req, res) => {
    const { phoneNumber, newpassword } = req.body;
    User.findOne({ phoneNumber: phoneNumber })
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

/* PATCH Request handler */
const updateUser = async (req, res) => {
    const { phoneNumber, name } = req.body;
    User.findOneAndUpdate({ phoneNumber: phoneNumber }, { name: name }, { new: true })
        .then(user => {
            if (user) {
                res.json("User data updated successfully");
            } else {
                res.json("No record exist");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("An error occurred while updating user data");
        });
};


/* DELETE Request handler */
const deleteUser = (req, res) => {
    res.json({ message: "delete Item" })
}

module.exports = {
    getData,
    loginUser,
    addUser,
    getUser,
    recoveryPass, // Correct function name
    updatePass,
    updateUser,
    deleteUser
}