const mongoose = require('mongoose');


//Schemas 
const userSchema = mongoose.Schema({
    // Name of the item
    name: {
        type: String,
        required: true

    },
    userId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean
    }
},
    // Time the object was added
    { timestamp: true }

);// Schema end


const Users = mongoose.model("users", userSchema);
module.exports = Users;