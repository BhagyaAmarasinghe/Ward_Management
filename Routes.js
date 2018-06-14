'use strict';

var express = require('express');
var Routes =express.Router();
var machineRouter = require('./Machine/Machine.Router');
var patientRouter = require('./Patient/Patient.Router');
var DoctorRouter = require('./Doctor/Doctor.Router');
var MaterialRouter = require('./Materials/Materials.Router');


Routes.use('/Machines/',machineRouter);
Routes.use('/Patients/',patientRouter);
Routes.use('/Doctors/',DoctorRouter);
Routes.use('/Materials/',MaterialRouter);



module.exports = Routes;