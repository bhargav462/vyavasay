const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/vyavasay");

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
        required:true
    },
    nextCrop:{
        type:String,
        required:true
    }
});

var cropData = mongoose.model('cropData',cropDataSchema);

var jsonData = {
    "Sheet1": [
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "GroundNut",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Rice",
            "cropSeason": "Rabi",
            "nextCrop": "GroundNut"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "GroundNut",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Cotton",
            "cropSeason": "Zind",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Rice",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "citrus",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "flowers",
            "cropSeason": "Kharif",
            "nextCrop": "GroundNut"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Potassium",
            "previousCrop": "GroundNut",
            "cropSeason": "Rabi",
            "nextCrop": "Tobacco"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Potassium",
            "previousCrop": "Tobacco",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Potassium",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "GroundNut"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Calcium",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Calcium",
            "previousCrop": "tropicalFruits",
            "cropSeason": "Rabi",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Calcium",
            "previousCrop": "Vegetables",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Magnesium",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Magnesium",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Magnesium",
            "previousCrop": "tropicalFruits",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Sulphur",
            "previousCrop": "GroundNut",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Sulphur",
            "previousCrop": "Cotton",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Sulphur",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "GroundNut"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Zinc",
            "previousCrop": "Rice",
            "cropSeason": "Rabi",
            "nextCrop": "GroundNut"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Zinc",
            "previousCrop": "Rice",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Zinc",
            "previousCrop": "GroundNut",
            "cropSeason": "Zind",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Zinc",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Copper",
            "previousCrop": "Rice",
            "cropSeason": "Zind",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Copper",
            "previousCrop": "citrus",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Copper",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Iron",
            "previousCrop": "Rice",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Iron",
            "previousCrop": "Cotton",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Iron",
            "previousCrop": "Rice",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Iron",
            "previousCrop": "Rice",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Manganese",
            "previousCrop": "Rice",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Manganese",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Manganese",
            "previousCrop": "Rice",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Boron",
            "previousCrop": "citrus",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Boron",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Boron",
            "previousCrop": "citrus",
            "cropSeason": "Zind",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Sugarcane",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Rice",
            "cropSeason": "Rabi",
            "nextCrop": "Sugarcane"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Sugarcane",
            "cropSeason": "Zind",
            "nextCrop": "Wheat"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Cotton",
            "cropSeason": "Zind",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Rice",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "citrus",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Wheat",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "flowers",
            "cropSeason": "Kharif",
            "nextCrop": "Sugarcane"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Potassium",
            "previousCrop": "Sugarcane",
            "cropSeason": "Rabi",
            "nextCrop": "Tobacco"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Potassium",
            "previousCrop": "Tobacco",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Potassium",
            "previousCrop": "Wheat",
            "cropSeason": "Kharif",
            "nextCrop": "Sugarcane"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Calcium",
            "previousCrop": "Wheat",
            "cropSeason": "Kharif",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Calcium",
            "previousCrop": "tropicalFruits",
            "cropSeason": "Rabi",
            "nextCrop": "Wheat"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Calcium",
            "previousCrop": "Wheat",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Magnesium",
            "previousCrop": "Wheat",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Magnesium",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Magnesium",
            "previousCrop": "tropicalFruits",
            "cropSeason": "Zind",
            "nextCrop": "Wheat"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Sulphur",
            "previousCrop": "Sugarcane",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Sulphur",
            "previousCrop": "Cotton",
            "cropSeason": "Zind",
            "nextCrop": "Wheat"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Sulphur",
            "previousCrop": "Wheat",
            "cropSeason": "Kharif",
            "nextCrop": "Sugarcane"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Zinc",
            "previousCrop": "Rice",
            "cropSeason": "Rabi",
            "nextCrop": "Sugarcane"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Zinc",
            "previousCrop": "Rice",
            "cropSeason": "Zind",
            "nextCrop": "Wheat"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Zinc",
            "previousCrop": "Sugarcane",
            "cropSeason": "Zind",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Zinc",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Copper",
            "previousCrop": "Rice",
            "cropSeason": "Zind",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Copper",
            "previousCrop": "citrus",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Copper",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Iron",
            "previousCrop": "Rice",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Iron",
            "previousCrop": "Cotton",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Iron",
            "previousCrop": "Rice",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Iron",
            "previousCrop": "Rice",
            "cropSeason": "Zind",
            "nextCrop": "Wheat"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Manganese",
            "previousCrop": "Rice",
            "cropSeason": "Zind",
            "nextCrop": "Wheat"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Manganese",
            "previousCrop": "Wheat",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Manganese",
            "previousCrop": "Rice",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Boron",
            "previousCrop": "citrus",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Boron",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Boron",
            "previousCrop": "citrus",
            "cropSeason": "Zind",
            "nextCrop": "citrus"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Potatoes",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Ragi",
            "cropSeason": "Rabi",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Potatoes",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Cotton",
            "cropSeason": "Zind",
            "nextCrop": "Pulses"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Ragi",
            "cropSeason": "Zind",
            "nextCrop": "Pulses"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Pulses",
            "cropSeason": "Kharif",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Pulses",
            "cropSeason": "Kharif",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Potassium",
            "previousCrop": "Potatoes",
            "cropSeason": "Rabi",
            "nextCrop": "Tobacco"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Potassium",
            "previousCrop": "Tobacco",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Potassium",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Calcium",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Calcium",
            "previousCrop": "tropicalFruits",
            "cropSeason": "Rabi",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Calcium",
            "previousCrop": "Vegetables",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Magnesium",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Magnesium",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Magnesium",
            "previousCrop": "tropicalFruits",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Sulphur",
            "previousCrop": "Potatoes",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Sulphur",
            "previousCrop": "Cotton",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Sulphur",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Zinc",
            "previousCrop": "Ragi",
            "cropSeason": "Rabi",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Zinc",
            "previousCrop": "Ragi",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Zinc",
            "previousCrop": "Potatoes",
            "cropSeason": "Zind",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Zinc",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Copper",
            "previousCrop": "Ragi",
            "cropSeason": "Zind",
            "nextCrop": "Pulses"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Copper",
            "previousCrop": "Pulses",
            "cropSeason": "Kharif",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Copper",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Iron",
            "previousCrop": "Ragi",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Iron",
            "previousCrop": "Cotton",
            "cropSeason": "Kharif",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Iron",
            "previousCrop": "Ragi",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Iron",
            "previousCrop": "Ragi",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Manganese",
            "previousCrop": "Ragi",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Manganese",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Manganese",
            "previousCrop": "Ragi",
            "cropSeason": "Rabi",
            "nextCrop": "Pulses"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Boron",
            "previousCrop": "Pulses",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Boron",
            "previousCrop": "Cotton",
            "cropSeason": "Rabi",
            "nextCrop": "Pulses"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Boron",
            "previousCrop": "Pulses",
            "cropSeason": "Zind",
            "nextCrop": "Pulses"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Iron",
            "previousCrop": "Rubber",
            "cropSeason": "Kharif",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Iron",
            "previousCrop": "Rubber",
            "cropSeason": "Rabi",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Iron",
            "previousCrop": "Rubber",
            "cropSeason": "Zind",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Manganese",
            "previousCrop": "Coffee",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Manganese",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Manganese",
            "previousCrop": "Coffee",
            "cropSeason": "Zind",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Coffee",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Coffee",
            "cropSeason": "Zind",
            "nextCrop": "citrus"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Coffee",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "citrus",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "flowers",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Potassium",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Potassium",
            "previousCrop": "Coffee",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Potassium",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Calcium",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Calcium",
            "previousCrop": "tropicalFruits",
            "cropSeason": "Rabi",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Calcium",
            "previousCrop": "Vegetables",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Magnesium",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Magnesium",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Magnesium",
            "previousCrop": "tropicalFruits",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Sulphur",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Sulphur",
            "previousCrop": "Coffee",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Sulphur",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Zinc",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Zinc",
            "previousCrop": "Coffee",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Zinc",
            "previousCrop": "Coffee",
            "cropSeason": "Zind",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Zinc",
            "previousCrop": "Coffee",
            "cropSeason": "Kharif",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Copper",
            "previousCrop": "Coffee",
            "cropSeason": "Zind",
            "nextCrop": "citrus"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Copper",
            "previousCrop": "citrus",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Copper",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Iron",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Iron",
            "previousCrop": "Coffee",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Iron",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Iron",
            "previousCrop": "Coffee",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Manganese",
            "previousCrop": "Coffee",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Manganese",
            "previousCrop": "Vegetables",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Manganese",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Boron",
            "previousCrop": "citrus",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Boron",
            "previousCrop": "Coffee",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Boron",
            "previousCrop": "citrus",
            "cropSeason": "Zind",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "GroundNut"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "GroundNut"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "GroundNut"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "GroundNut"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Alluvium",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Sugarcane"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Sugarcane"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Sugarcane"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Sugarcane"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rice"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Cotton"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "Black ",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Pulses"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Pulses"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Pulses"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Ragi"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Potatoes"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "RedYellow",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Rubber"
        },
        {
            "soilType": "Laterite",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Phosphorus",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Potassium",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "citrus"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Calcium",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Sulphur",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "flowers"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Zinc",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Copper",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Iron",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Manganese",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "tropicalFruits"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Kharif",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Rabi",
            "nextCrop": "Coffee"
        },
        {
            "soilType": "ForestMountain",
            "nutritionContent": "Boron",
            "previousCrop": "not",
            "cropSeason": "Zind",
            "nextCrop": "Vegetables"
        }
    ]
};

var count = 0;
    
cropData.remove({}).then(() => {
    jsonData.Sheet1.forEach(function(data){
    var cropTemp = new cropData(data);
    console.log(cropTemp);
        cropTemp.save().then(() => {
            count++;
          console.log('adding',count);
        }).catch((e) => {
            console.log('Error',e);
            return;
        });
    });
}).catch((e) => {
    console.log('error in remove',e);
});

console.log('Data was successfully added');
