var express= require('express');
var router=express.Router();
var controllerE=require('./Emergency.controller');

router.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*' );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

router.get('/',function (req,res) {
    controllerE.getList().then(function (data) {
        res.status(data.status).send({data:data.data});
    }).catch(function (err) {
        res.status(err.status).send({message:err.message});
    })

});

module.exports=router;