var express=require('express');
var controller=require('./Patients.controller');
var router=express.Router();

router.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');

    next();
});

router.post('/',function (req,res) {


    controller.add(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    })
});

router.put('/:PID',function (req,res) {
    controller.edit(req.params.PID,req.body).then(function (response) {
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    })
});

router.get('/',function (req,res) {
    controller.fetchall().then(function (response) {
        //res.status(response.status).send({data:data.data});
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    })
});

router.get('/:PID',function (req,res) {
    controller.fetchsingle(req.params.PID).then(function (response) {
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    })
});

router.delete('/:PID',function (req,res) {
    controller.deletedata(req.params.PID).then(function (response) {
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    })
});

module.exports=router;