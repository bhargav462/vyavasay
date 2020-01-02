var config = require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var utlencodedParser = bodyParser.urlencoded({extended:true});
const _ = require('lodash');
const hbs = require('hbs');
const path = require('path');
const publicPath = path.join(__dirname,'./public');

const {user} = require('./models/user');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Alumini");

const app = express();

app.use(bodyParser.json());
app.set('view engine','hbs');
app.use(express.static(publicPath));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.get('/',(req,res) => {
    res.render('index.html',{});
    console.log('Rendering the front page');
});

// app.post('/add',(req,res) => {
//     var body = _.pick(req.body,['userName','password']);
//     var newUser = new user(body);

//     newUser.save().then(() => {
//         console.log('data was added successfully');
//         res.render('index.html');
//     }).catch((e) => {
//         console.log('User already exists');
//         res.sendStatus(404).send(e);
//     });
// });

// app.post('/check',(req,res) => {
//     user.findOne({userName:req.body.userName,password:req.body.password}).then((user1) => {
//         if(!user1){
//             res.sendStatus(400).send("No user found");
//         }else{
//             res.send(user1);
//         }
//     }).catch((e) => {
//         res.sendStatus(404).send(e);
//     });
// });

app.listen(3001,() => {
    console.log(`Server is up on port ${3001}`);
})