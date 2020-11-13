const bodyParser = require('body-parser');
const path = require('path');
const User = require('../models/user');
   


const getUser = async (req,res,next) =>{
    try{    
        const users = await  User.find({});

        return res.json({data:users});

    }catch(err){
        console.log(err);
    }
} 


const createUser = async (req,res,next)=>{
    try{
        const user = new User();
        user.fName = req.body.fname;
        user.lName = req.body.lname;
        user.email = req.body.email;
        user.age = req.body.age;
        await user.save();
        // return res.json({message:"user Added!"})
        return res.json({data:user});

    }catch(err){
        console.log(err);
    }
}

const getUserById = async(req,res,next) =>{
    try{
        const id = req.query.id;
        console.log(id);
        const user = await User.findById(id);
        return res.json({data:user});
    }catch(err){
        console.log(err)
    }   
}


const updateUser = async (req,res,next)=>{
    try{
        const userId = req.query.id;
        fname = req.body.fname;
        lname = req.body.lname;
        email = req.body.email;
        age = req.body.age;
        const user = await User.updateOne({_id:userId},{$set:{fName:fname, lName:lname, email:email, age:age}});
        return res.json({data:user});
    }catch(err){
        console.log(err)
    }
}

const deleteUSer = async(req,res,next)=>{
    try{
        const userId = req.query.id;
        const user = await User.findByIdAndDelete(userId);
        return res.json({data:user});
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getUser,
    createUser,
    getUserById,
    updateUser,
    deleteUSer,
}