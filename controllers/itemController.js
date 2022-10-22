const itemModel = require('../models/itemModel')


// Get all Items Controller
const getItemController = async (req,res) => {
    try {
        const items = await itemModel.find();
        res.status(200).send(items);
    } catch (error) {
        console.log(`Error : ${error}`.bgRed);
    }

};

// Add an Item Controller
const addItemController = async (req,res) => {
    try {
        const newItem = new itemModel(req.body);
        await newItem.save();
        res.status(201).send('Item Added Successfully');
    } catch (error) {
        res.status(400).send('error',error);
        console.log(error);
    }

};

// Update Items
const editItemController = async (req,res) => {
    try {
        const {itemId} = req.body;
        await itemModel.findOneAndUpdate({_id: itemId},req.body,{
            new :true,
        });
        res.status(201).json('Item Updated!')
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
}

// Delete Items
const deleteItemController = async (req,res) => {
    try {
        const {itemId} = req.body;
        await itemModel.findOneAndDelete({_id:itemId})
        res.status(200).json('Item Deleted!')
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
}


module.exports = {getItemController, addItemController, editItemController, deleteItemController}

