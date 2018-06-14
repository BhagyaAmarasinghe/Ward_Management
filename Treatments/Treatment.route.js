var express= require('express');
var router=express.Router();
var controller=require('./Treatment.controller');

router.post('/',function (req,res) {
    controller.insertTreatment(req.body).then(function (data) {
        res.status(data.status).send({message:data.message});
    }).catch(function (err) {
        res.status(err.status).send({message:err.message});
    })

});

router.get('/',function (req,res) {
    controller.getAllTreatments().then(function (data) {
        res.status(data.status).send({data:data.data});
    }).catch(function (err) {
        res.status(err.status).send({message:err.message});
    })

});

router.get('/:id',function (req, res) {
    controller.getOneTreatment(req.params.id).then(function (data) {
        res.status(data.status).send({data:data.data});
    }).catch(function (err) {
        res.status(err.status).send({message:err.message});
    })
});

router.delete('/:id',function(req,res){
    controller.deleteTreatment(req.params.id).then(function(data){
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.put('/:id',function(req,res){
    controller.updateTreatment(req.params.id,req.body).then(function (data) {
        res.status(data.status).send({message:data.message});

    }).catch(function (err) {
        res.status(err.status).send({message:data.message})
    });
})



module.exports=router;