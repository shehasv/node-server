const express = require('express');
const userController = require('../controllers/userController');


const bookController = require('../controllers/userController');

const route = express.Router();
route.get("/users",userController.getUser);
route.post("/users",userController.createUser);
route.get("/user",userController.getUserById);
route.patch("/users",userController.updateUser)
route.delete("/users",userController.deleteUSer)
module.exports = route;