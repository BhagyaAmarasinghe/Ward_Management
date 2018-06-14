var mongoose = require('../DBSchema/SchemaMapper');
var attendantSchema = mongoose.model('Attendant');

var AttendantController = function () {
    this.insert = function (data) {
        return new Promise(function (resolve,reject) {
            var attendant = new attendantSchema({
                att_id:data.att_id,
                att_name:data.att_name,
                att_nic: data.att_nic,
                att_age:data.att_age,
                att_address:data.att_address,
                att_ward:data.att_ward
            });

            attendant.save().then(function () {
                resolve({
                    status:200,
                    message:'attendant successfully addedd'
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'attendant could no be added'+reason
                })
            })
        })
    };

    this.updateAttendant = function (att_id,data) {
        return new Promise(function (resolve,reject) {
            attendantSchema.update({att_id:att_id},data).then(function () {
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

    this.getAttendants = function () {
        return new Promise(function (resolve,reject) {
            attendantSchema.find().exec().then(function (data) {
                resolve({
                    status:200,
                    data:data
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'could not get attendant data'+reason
                })
            })
        })
    };

    this.getOneAttendant = function (att_id) {
        return new Promise(function (resolve,reject) {
            attendantSchema.find({att_id:att_id}).exec().then(function (data) {
                resolve({
                    status:200,
                    data:data
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'could not get the data on '+att_id + 'the reason :'+reason
                })
            })
        })
    };

    this.removeAttendant = function (att_id) {
        return new Promise(function (resolve,reject) {
            attendantSchema.remove({att_id:att_id}).then(function () {
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

module.exports = new AttendantController();