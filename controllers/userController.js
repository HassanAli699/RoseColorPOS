const userModal = require('../models/UserModel')


// Login User Controller
const loginController = async (req, res) => {
    try {

        const { userId, password } = req.body
        const user = await userModal.findOne({ userId, password, verified: false });
        if (user) {
            res.status(200).send(user);
        } else {
            res.json({
                messgae: 'Login Failed!',
                user
            })
        }

    } catch (error) {
        console.log(`Error : ${error}`.bgRed);
    }

};

// Register User Controller
const registerController = async (req, res) => {
    try {
        const newUser = new userModal({ ...req.body, verified: true });
        await newUser.save();
        res.status(201).send('User Registered Successfully');
    } catch (error) {
        res.status(400).send('error', error);
        console.log(error);
    }

};

module.exports = { loginController, registerController }

