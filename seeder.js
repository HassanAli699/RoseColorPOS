const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDb =  require('./config/config');
const itemModel = require('./models/itemModel');
const items = require('./utils/data');
const { deleteMany } = require('./models/itemModel');
require('colors')

// Config
dotenv.config();
connectDb();

//Seeder Function
const importData = async () => {
    try {
        await itemModel.deleteMany();
        const itemsData = await itemModel.insertMany(items);
        console.log('All Items Added'.bgGreen);
        process.exit(); // Only exit

    } catch (error) {
        console.log(`${error}`.bgRed.inverse);
        process.exit(1); // Exit with failure
    }
};

importData();