var mongoose = require('../DBSchema/SchemaMapper');
var patientSchema  = mongoose.model('Patient');
var doctorSchema = mongoose.model('Doctor');

var DoctorController = function () {
    this.insert = function (data) {
        return new Promise(function (resolve,reject) {
            var doctor = new doctorSchema({
                d_id:data.d_id,
                d_name:data.d_name,
                d_nic:data.d_nic,
                d_age:data.d_age,
                d_address:data.d_address,
                d_telephone:data.d_telephone,
                d_specialty:data.d_specialty,
                d_ps:data.d_ps

            });

            doctor.save().then(function () {
                resolve({
                    status:200,
                    message:'doctor data successfully added'
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'doctor data could not be added'+reason
                })
            })
        })
    };
};


module.exports = new DoctorController();