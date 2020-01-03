var mongoose = require('mongoose');

var cropDataSchema = new mongoose.Schema({
    soilType:{
        type:String,
        required:true,
        trim:true
    },
    nutritionContent:{
        type:String,
        required:true,
        trim:true
    },
    previousCrop:{
        type:String,
        trim:true
    },
    cropSeason:{
        type:String, 
        trim:true,
        required:true
    },
    nextCrop:{
        type:String,
        trim:true
    }
});

var cropData = mongoose.model('cropData',cropDataSchema);

module.exports = {cropData};