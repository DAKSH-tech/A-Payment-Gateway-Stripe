const express=require('express');
const app=express();
const mongoose=require('mongoose');
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const passport=require('passport');
const bodyParser = require('body-parser');
const passportLocal=require('./config/passport-local-strategy');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const MongoStore=require('connect-mongo');
require('dotenv').config();
// create application/json parser
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use('/assets',express.static(__dirname + '/assets'));
app.use(express.urlencoded());
//Setting view engine and view folder so that controller can easily access
app.set('view engine','ejs');
app.set('views','./views');
//Express session for cookies
app.use(session({
    name:'payment_gateway',
    //To do change secret before deplyment in production  mode
    secret: process.env.secret,
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create(
        {
        mongoUrl: 'mongodb://localhost/payment_gateway',
        autoRemove: 'disabled'
    },function(err){
        console.log(err || 'connect-mongodb setup ok');
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./route/index'));
app.listen(8000,function(err){
    if(err){
        console.log("Error is Coming in connnecting to Server ",err);
    }
    console.log('Server Started');
})