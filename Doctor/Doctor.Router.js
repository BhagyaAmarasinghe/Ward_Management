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

router.get('/', (req, res) => {
    Controller.getAll().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.get('/:d_id', (req, res) => {
    Controller.getSingle(req.params.d_id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.put('/:id', (req, res) => {
    Controller.update(req.params.id, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.delete('/:id', (req, res) => {
    Controller.delete(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})

module.exports = router;