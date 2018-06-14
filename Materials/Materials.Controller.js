var mongoose = require('../DBSchema/SchemaMapper');
var materialSchema = mongoose.model('Materials');

var MaterialController = function () {
    this.insert = function (data) {
        return new Promise(function (resolve,reject) {
            var material = new materialSchema({
                mat_id:data.mat_id,
                mat_name:data.mat_name,
                mat_quantity: data.mat_quantity,
                mat_price:data.mat_price
            });
            
            material.save().then(function () {
                resolve({
                    status:200,
                    message:'material successfully addedd'
                })
            }).catch(function (reason) { 
                reject({
                    status:500,
                    message:'material could no be added'+reason
                })
            })
        })
    };
    
    this.updateMaterial = function (mat_id,data) {
        return new Promise(function (resolve,reject) {
            materialSchema.update({mat_id:mat_id},data).then(function () {
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

    this.getMaterials = function () {
        return new Promise(function (resolve,reject) {
            materialSchema.find().exec().then(function (data) {
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

    this.getOneMaterial = function (mat_id) {
        return new Promise(function (resolve,reject) {
            materialSchema.find({mat_id:mat_id}).exec().then(function (data) {
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
    
    this.removeMaterial = function (mat_id) {
        return new Promise(function (resolve,reject) {
            materialSchema.remove({mat_id:mat_id}).then(function () {
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

module.exports = new MaterialController();