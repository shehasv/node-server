const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const userRoutes = require('./routes/userRoutes');


const MONGO_URI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(MONGO_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/",userRoutes);

const PORT = process.env.PORT || 9000;

app.listen( PORT,()=>{
    console.log(`Server running in port ${PORT}`);
})