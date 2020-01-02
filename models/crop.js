const mongoose = require('mongoose');

var cropSchema = new mongoose.Schema({
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
    CropArea:{
         type:Number,
         required:true,
         trim:true
    },
    phoneNo:{
        type:Number,
        required:true,
        trim:true,
        unique:true
    },
    soilType:{
        type:String,
        required:true
    },
    previousCrop:{
        type:String,
        required:true
    },
    nutritionContent:{
        type:String,
        required:true
    },
    waterAvailability:{
        type:Number,
        required:true
    },
    cropSeason:{
        type:String,
        required:true
    },
    biometricId:{
        type:Number
    }
});

var crop = mongoose.model('crop',cropSchema);

module.exports = {crop};