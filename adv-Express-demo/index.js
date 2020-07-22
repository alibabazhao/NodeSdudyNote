const Joi=require('joi'); //return a class, joi is for input validataion
const express=require('express'); //require return a function
const app=express(); //call the express function

//Built-in Middleware function
app.use(express.json()); //express.json() return a middleware function
app.use(express.urlencoded( {extended:true})); //key, value & key, value... req.body has the similar key value format
app.use(express.static('public'));

//create custom Middleware function
// app.use(function(req, res, next){
//     console.log('Logging...');
//     next();//pass control
// });
//exports each module for each middleware funciton
//import the module and call it. 
const logger=require("./logger.js");
app.use(logger);

app.use(function(req, res, next){
    console.log('Authenticating...');
    next();//pass control
});

//process is a global object 
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

const morgan=require('morgan');
if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    console.log('Morgan enabled ...')
}

//use configuration
const config=require('config');
console.log('Application Name: '+ config.get('name'));
console.log('Mail Server: '+ config.get('mail.host'));
console.log('Mail Password: '+ config.get('mail.password')); //export app_password=1234

//use debug module
const startupDebugger=require('debug')('app:startup');
const dbDebugger=require('debug')('app:db');
//test startup

//db work...
dbDebugger('Connected to the database ...'); //export DEBUG=app:*
if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled ...')
}

//use environment variable for the hard-coded PORT
const port=process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



