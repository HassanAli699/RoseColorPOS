const mongoose = require('mongoose');


//Schemas 
const itemSchema = mongoose.Schema({
    // Name of the item
    name:{ 
        type:String,
        required: true

    },
    // Price of the item
    price:{
        type:Number,
        required: true
    },
    // Category of the item
    category:{
        type:String,
        required:true
    },
    // Image of the item
    image:{
        type:String,
        required:true
    }
},
// Time the object was added
{timestamp: true}

);// Schema end


const Items = mongoose.model("Items", itemSchema); 
module.exports = Items;