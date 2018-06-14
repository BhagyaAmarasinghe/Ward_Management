var express = require('express');
var router = express.Router();
var Controller = require('./Diagnostics.controller');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


router.post('/',function (req,res) {
    Controller.addDiagnostic(req.body).then(function (data) {
        res.status(data.status).send({message:data.message})
    }).catch(function (err) {
        res.status(err.status).send({message:err.message})
    })
});

router.put('/:diag_id',function (req,res) {
    Controller.updateDiagnosis(req.params.diag_id,req.body).then(function (data) {
        res.status(data.status).send({message:data.message})
    }).catch(function (err) {
        res.status(err.status).send({message:err.message})
    })
});

router.delete('/:diag_id',function (req,res) {
    Controller.deleteDiagnosis(req.params.diag_id).then(function (data) {
        res.status(data.status).send({message:data.message})
    }).catch(function (err) {
        res.status(err.status).send({message:err.message})
    })
});

router.get('/:diag_id',function (req,res) {
    Controller.viewDiagnosis(req.params.diag_id).then(function (data) {
        res.status(data.status).send({data:data.data})
    }).catch(function (reason) {
        res.status(reason.status).send({message:reason.message})
    })
});


module.exports = router;