var mongoose = require('../DBSchema/SchemaMapper');
var nurseSchema = mongoose.model('Nurse');

var NurseController = function () {
    this.insert = function (data) {
        return new Promise(function (resolve,reject) {
            var nurse = new nurseSchema({
                nur_id:data.nur_id,
                nur_name:data.nur_name,
                nur_nic: data.nur_nic,
                nur_age:data.nur_age,
                nur_address:data.nur_address,
                nur_ward:data.nur_ward,
                nur_priority_status:data.nur_priority_status
            });

            nurse.save().then(function () {
                resolve({
                    status:200,
                    message:'nurse successfully addedd'
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'nurse could no be added'+reason
                })
            })
        })
    };

    this.updateNurse = function (nur_id,data) {
        return new Promise(function (resolve,reject) {
            nurseSchema.update({nur_id:nur_id},data).then(function () {
                resolve({
                    status:200,
                    message:'material data successfully updated'
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'material dara update failed'+reason
                })
            })
        })
    };

    this.getNurses = function () {
        return new Promise(function (resolve,reject) {
            nurseSchema.find().exec().then(function (data) {
                resolve({
                    status:200,
                    data:data
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'could not get material data'+reason
                })
            })
        })
    };

    this.getOneNurse = function (mat_id) {
        return new Promise(function (resolve,reject) {
            nurseSchema.find({nur_id:nur_id}).exec().then(function (data) {
                resolve({
                    status:200,
                    data:data
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'could not get the data on '+mat_id + 'the reason :'+reason
                })
            })
        })
    };

    this.removeNurse = function (nur_id) {
        return new Promise(function (resolve,reject) {
            nurseSchema.remove({nur_id:nur_id}).then(function () {
                resolve({
                    status:200,
                    message:'material successfully removed'
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'material could not be removed'+reason
                })
            })
        })
    }

};

module.exports = new NurseController();