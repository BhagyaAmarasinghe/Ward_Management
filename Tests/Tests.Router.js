var express=require('express');
var controller=require('./Tests.Controller');
var router=express.Router();

router.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');

    next();
});

router.post('/',function (req,res) {


    controller.addTest(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    })
});

router.put('/:t_id',function (req,res) {
    controller.updateTest(req.params.t_id,req.body).then(function (response) {
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    })
});

router.get('/:t_name',function (req,res) {
    controller.getByName(req.params.t_name).then(function (response) {
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    })
});

router.delete('/:t_id',function (req,res) {
    controller.deleteTest(req.params.t_id).then(function (response) {
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    })
});

module.exports = router;
