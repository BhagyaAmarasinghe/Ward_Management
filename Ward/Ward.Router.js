var express = require('express');
var router = express.Router();
var Controller = require('./Ward.Controller');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.post('/',function (req,res) {
    Controller.insert(req.body).then(function (data) {
        res.status(data.status).send({message:data.message});
    }).catch(function (reason) {
        res.status(reason.status).send({message:reason.message})
    })
});

router.put('/w_id',function (req,res) {
    Controller.updateWard(req.params.w_id,req.body).then(function (data) {
        res.status(data.status).send({message:data.message})
    }).catch(function (reason) {
        res.status(reason.status).send({message:reason.message})
    })
});

router.get('/',function (req,res) {
    Controller.getWard().then(function (data) {
        res.status(data.status).send({data:data.data})
    }).catch(function (reason) {
        res.status(reason.status).send({message:reason.message})
    })
});

router.get('/:w_id',function (req,res) {
    Controller.getOneWard(req.params.w_id).then(function (data) {
        res.status(data.status).send({data:data.data})
    }).catch(function (reason) {
        res.status(reason.status).send({message:reason.message})
    })
});

router.delete('/:w_id',function (req,res) {
    Controller.removeWard(req.params.w_id).then(function (data) {
        res.status(data.status).send({message:data.message})
    }).catch(function (reason) {
        res.status(reason.status).send({message:reason.message})
    })
});

module.exports = router;
