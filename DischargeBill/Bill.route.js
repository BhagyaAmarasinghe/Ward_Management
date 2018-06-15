var express= require('express');
var router=express.Router();
var controller=require('./Bill.controller');

router.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*' );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

router.post('/',function (req,res) {
    controller.createBill(req.body).then(function (data) {
        res.status(data.status).send({message:data.message});
    }).catch(function (err) {
        res.status(err.status).send({message:err.message});
    })

});



router.get('/',function (req, res) {
    controller.getAllBills(req.params.bill_id).then(function (data) {
        res.status(data.status).send({data:data.data});
    }).catch(function (err) {
        res.status(err.status).send({message:err.message});
    })
});

router.get('/:bill_id',function (req, res) {
    controller.getBill(req.params.bill_id).then(function (data) {
        res.status(data.status).send({data:data.data});
    }).catch(function (err) {
        res.status(err.status).send({message:err.message});
    })
});

/*router.delete('/:bill_id',function(req,res){
    controller.deleteBill(req.params.id).then(function(data){
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});*/

router.put('/:bill_id',function(req,res){
    controller.updateBill(req.params.bill_id,req.body).then(function (data) {
        res.status(data.status).send({message:data.message});

    }).catch(function (err) {
        res.status(err.status).send({message:data.message})
    });
});



module.exports=router;