'use strict';

var express = require('express');
var Routes =express.Router();
var machineRouter = require('./Machine/Machine.Router');
var patientRouter = require('./Patient/Patient.Router');
var DoctorRouter = require('./Doctor/Doctor.Router');
var MaterialRouter = require('./Materials/Materials.Router');

//sachitha
var UserRouter=require('./Users/User.router');
var PatientRouter=require('./Patients/Patient.router');

//hima
var treatmentRoute=require('./Treatments/Treatment.route');
var drugRoute=require('./Drugs/Drug.route');




Routes.use('/Machines/',machineRouter);
Routes.use('/Patients/',patientRouter);
Routes.use('/Doctors/',DoctorRouter);
Routes.use('/Materials/',MaterialRouter);

//sachitha
Routes.use('/UserDetails/',UserRouter);
Routes.use('/PatientDetails/',PatientRouter);

//hima

routes.use('/Treatments/',treatmentRoute);
routes.use('/Drugs/',drugRoute);

module.exports = Routes;