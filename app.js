'use strict';

const express = require('express');
const BodyParser  = require('body-parser');
const Routes = require('./Routes');
var Cors		= require('cors');


const app = express();

app.use(BodyParser.urlencoded({extended:true}));
app.use(BodyParser.json());
app.use('/',Routes);
app.use(Cors());

app.listen(8003,'localhost',function (err) {
    if(err){
        console.log('Error occured while connecting to the port 8003'+err);
        process.exit(-1);
    }
    console.log('connected to the port 8003');
});


