var mongoose = require('../DBSchema/SchemaMapper');
var patientSchema  = mongoose.model('Patient');
var doctorSchema = mongoose.model('Doctor');
const control=require('../EmergencyList/Emergency.controller');

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

    this.getAll = function() {
        return new Promise((resolve, reject) => {
            doctorSchema.find().exec().then(data => {

                myFunc(data);
                resolve({'status': 200, 'message':'get all data', 'data': data});
    }).catch(err => {
            reject({'status': 404, 'message':'err:-'+err});
    })
    })
    }

    this.getSingle = function(d_id) {
        return new Promise((resolve, reject) => {
            doctorSchema.find({d_id: d_id}).exec().then(data => {
            resolve({'status': 200, 'message':'get single data', 'data': data});
    }).catch(err => {
            reject({'status': 404, 'message':'err:-'+err});
    })
    })
    }

    this.update = function(d_id, updateData) {
        return new Promise((resolve, reject) => {
            doctorSchema.update({d_id: d_id}, updateData).then(() => {
            resolve({'status': 200, 'message':'update user'});
    }).catch(err => {
            reject({'status': 404, 'message':'err:-'+err});
    })
    })
    }

    this.delete = function(d_id) {
        return new Promise((resolve, reject) => {
            doctorSchema.remove({d_id: d_id}).then(() => {
            resolve({'status': 200, 'message':'delete user'});
    }).catch(err => {
            reject({'status': 404, 'message':'err:-'+err});
    })
    })
    }
};

function myFunc(Str){
    for(var i=0;i<Str.length;i++){
        var index=Str[i];
        //console.log(index);
        control.deleteList();
        control.createList(index);
    }
}

module.exports = new DoctorController();