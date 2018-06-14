var express = require('express');
var router = express.Router();
var Controller = require('./Attendant.Controller');

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

router.put('/:att_id',function (req,res) {
    Controller.updateAttendant(req.params.att_id,req.body).then(function (data) {
        res.status(data.status).send({message:data.message})
    }).catch(function (reason) {
        res.status(reason.status).send({message:reason.message})
    })
});

router.get('/',function (req,res) {
    Controller.getAttendants().then(function (data) {
        res.status(data.status).send({data:data.data})
    }).catch(function (reason) {
        res.status(reason.status).send({message:reason.message})
    })
});

router.get('/:att_id',function (req,res) {
    Controller.getOneAttendant(req.params.att_id).then(function (data) {
        res.status(data.status).send({data:data.data})
    }).catch(function (reason) {
        res.status(reason.status).send({message:reason.message})
    })
});

router.delete('/:mat_id',function (req,res) {
    Controller.removeAttendant(req.params.att_id).then(function (data) {
        res.status(data.status).send({message:data.message})
    }).catch(function (reason) {
        res.status(reason.status).send({message:reason.message})
    })
});

module.exports = router;
