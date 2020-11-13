const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fName: {type: String,required : true},
    lName: {type: String},
    email:{type: String,required:true},
    age:{type:Number}
})

const User = mongoose.model("User",userSchema);

module.exports = User;