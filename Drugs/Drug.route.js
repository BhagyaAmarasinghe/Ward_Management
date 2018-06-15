var express= require('express');
var router=express.Router();
var controller=require('./Drug.controller');

router.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*' );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

router.post('/',function (req,res) {
    controller.insertDrug(req.body).then(function (data) {
        res.status(data.status).send({message:data.message});
    }).catch(function (err) {
        res.status(err.status).send({message:err.message});
    })

});

router.get('/',function (req,res) {
    controller.getAllDrugs().then(function (data) {
        res.status(data.status).send({data:data.data});
    }).catch(function (err) {
        res.status(err.status).send({message:err.message});
    })

});

router.get('/:name',function (req, res) {
    controller.getOneDrug(req.params.name).then(function (data) {
        res.status(data.status).send({data:data.data});
    }).catch(function (err) {
        res.status(err.status).send({message:err.message});
    })
});

router.delete('/:id',function(req,res){
    controller.deleteDrug(req.params.id).then(function(data){
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.put('/:id',function(req,res){
    controller.updateDrug(req.params.id,req.body).then(function (data) {
        res.status(data.status).send({message:data.message});

    }).catch(function (err) {
        res.status(err.status).send({message:data.message})
    });
})



module.exports=router;