const mongoose = require('mongoose');
const validator = require('validator');

var userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    AadharNo:{
         type:String,
         required:true,
         trim:true,
         unique:true
    },
    phoneNo:{
        type:Number,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:3
    }
});


var user = mongoose.model('user',userSchema);

module.exports = {user};