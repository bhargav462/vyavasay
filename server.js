var config = require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:true});
const _ = require('lodash');
const hbs = require('hbs');
const path = require('path');
const publicPath = path.join(__dirname,'./public');

const {user} = require('./models/user');

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
        res.send('done');
    }).catch((e) => {
        console.log('User already exists or An error has occured');
        // res.sendStatus(404).send(e);
        res.send(e);
    });
});

app.post('/check',urlencodedParser,(req,res) => {
    console.log('In');
    console.log(req.body);
    user.findOne({AadharNo:req.body.AadharNo,password:req.body.password}).then((user1) => {
        if(!user1){
            console.log("No user");
            res.send("No user found");
        }else{
            console.log("user");
            res.send(user1);
        }
    }).catch((e) => {
        console.log("error");
        res.sendStatus(404).send(e);
    });
});

app.listen(3001,() => {
    console.log(`Server is up on port ${3001}`);
})