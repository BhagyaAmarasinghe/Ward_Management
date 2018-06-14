var express = require('express');
var router = express.Router();
var Controller = require('./Doctor.Controller');

router.post('/',function (req,res) {
    Controller.insert(req.body).then(function (data) {
        res.status(data.status).send({message:data.message});
    }).catch(function (reason) {
        res.status(reason.status).send({message:reason.message})
    })
});

module.exports = router;