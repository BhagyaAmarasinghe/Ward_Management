var mongoose = require('../DBSchema/SchemaMapper');
var patientSchema  = mongoose.model('Patient');
var doctorSchema = mongoose.model('Doctor');

var PatientController = function () {
    this.getDoctorsPS = function (d_ps) {
            return new Promise(function (resolve,reject) {
                doctorSchema.find({d_ps:d_ps}).exec().then(function (data) {

                    resolve({
                        status:200,
                        data:data
                    })
                }).catch(function (reason) {
                    reject({
                        status:500,
                        message:'could not get the doctor list'
                    })
                })
            })
    }
};


module.exports = new PatientController();