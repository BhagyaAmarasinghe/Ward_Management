var express = require('express')
var router = express.Router();
var Controller = require('./Patient.Controller');


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


router.get('/Doctor_ps/:d_ps',function (req,res) {
        Controller.getDoctorsPS(req.params.d_ps).then(function (data) {
            res.status(data.status).send({data:data.data})
        }).catch(function (reason) {
            res.status(reason.status).send({message:reason.message})
        })
});

module.exports = router;