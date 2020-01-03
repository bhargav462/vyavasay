var config = require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:true});
const _ = require('lodash');
const hbs = require('hbs');
const path = require('path');
const publicPath = path.join(__dirname,'./public');

const {crop} = require('./models/crop');
const {user} = require('./models/user');
const {cropData} = require('./models/cropData');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/vyavasay");

const app = express();

app.use(bodyParser.json());
app.set('view engine','hbs');
app.use(express.static(publicPath));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.get('/',(req,res) => {
    res.render('index.html');
    console.log('Rendering the front page');
});

app.post('/add',urlencodedParser,(req,res) => {
    console.log("cheking");
    var body = _.pick(req.body,['Name','AadharNo','phoneNo','password']);
    body.phoneNo = parseInt(body.phoneNo,10);
    var newUser = new user(body);
    console.log(req.body);
    newUser.save().then(() => {
        console.log('data was added successfully');
        return res.send('done');
    }).catch((e) => {
        console.log('User already exists or An error has occured');
        // res.sendStatus(404).send(e);
        return res.send(e);
    });
});

var aadhar;

app.post('/check',urlencodedParser,(req,res) => {
    console.log('In');
    console.log(req.body);
    aadhar = req.body.AadharNo;
    user.findOne({AadharNo:req.body.AadharNo,password:req.body.password}).then((user1) => {
        if(!user1){
            console.log("No user");
            return res.send("No user found");
        }else{
            console.log("user");
            // res.send('done');
            return res.redirect('/main.html');
        }
    }).catch((e) => {
        console.log("error");
        return res.sendStatus(404).send(e);
    });
});

app.post('/crop',urlencodedParser,(req,res) => {
    console.log(req.body);
    console.log(aadhar);
    // res.send('done');
    var body = _.pick(req.body,['Name','AadharNo','CropArea','phoneNo','soilType','previousCrop','nutritionContent','waterAvailability','cropSeason','biometricId']);
    var newCrop = new crop(body);
    console.log(newCrop);
    newCrop.save().then(() => {
        console.log('data');
        cropData.findOne({
            soilType:req.body.soilType,
            nutritionContent: req.body.nutritionContent,
            previousCrop:req.body.previousCrop,
            cropSeason:req.body.cropSeason
        }).then((data) => {
        console.log(data);
        if(!data){
            console.log('No data found for your request');
            return res.send();
        }else{
            console.log('nextCrop',data.nextCrop);
            // res.send(data.nextCrop);
            res.send(data.nextCrop);
            // next();
        }
    });
    }).catch((e) => {
        console.log(e); 
         return res.send(e);
    });
});

// app.post('/addcheckCrop',(req,res) => {
//    var jsonData =  {
//     "Sheet1": [
//         {
//             "soilType": "ALLUVIAL SOIL",
//             "nutritionContent": "PHOSPHORUS",
//             "previousCrop": "GROUNDNUT",
//             "cropSeason": "RABI",
//             "nextCrop": "COTTON"
//         },
//         {
//             "soilType": "ALLUVIAL SOIL",
//             "nutritionContent": "PHOSPHORUS",
//             "previousCrop": "RICE",
//             "cropSeason": "RABI",
//             "nextCrop": "GROUNDNUT"
//         },
//        ]
//     }
    
// });

app.listen(3001,() => {
    console.log(`Server is up on port ${3001}`);
})