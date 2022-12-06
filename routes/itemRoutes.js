const express = require('express');
const { getItemController, addItemController,editItemController,deleteItemController } = require('../controllers/itemController');
const router = express.Router();

// Routes
//Method - Get
router.get('/get-item',getItemController);

//Method - POST
router.post('/add-item', addItemController);

//Method - PUT
router.put('/edit-item', editItemController);

//Method - Delete  
router.post('/delete-item', deleteItemController);



module.exports = router
