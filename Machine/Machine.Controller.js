'use strict';

var mongoose = require('../DBSchema/SchemaMapper');
var machineSchema = mongoose.model('Machine');

var MachineController =  function () {

    this.insert = function (data) {
        return new Promise(function (resolve,reject) {
            var machine = new machineSchema({
                m_id:data.m_id,
                m_name:data.m_name,
                m_price:data.m_price
            });

            machine.save().then(function () {
                resolve({
                    status:200,
                    message:'machine data successfully added'
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'machine data could not be added'+reason
                })
            })
        })
    };
    
    
    this.update = function (m_id,data) {
        return new Promise(function (resolve,reject) {
            machineSchema.update({m_id:m_id},data).then(function () {
                resolve({
                    status:200,
                    message:'machine data update successful'
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'machine data update failed'+reason
                })
            })
        })
        
    };


    this.allMachines = function () {
        return new Promise(function (resolve,reject) {
            machineSchema.find().exec().then(function (data) {
                resolve({
                    status:200,
                    data:data
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'machine data retrieval failed'+reason
                })
            })
        })
    };

    this.searchOne = function (m_id) {
        return new Promise(function (resolve,reject) {
            machineSchema.find({m_id:m_id}).exec().then(function (data) {
                resolve({
                    status:200,
                    data:data
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:'data of machine id '+ m_id +' failed'+reason
                })
            })
        })
    };

    this.deleteMachine = function (m_id) {
        return new Promise(function (resolve,reject) {
            machineSchema.remove({m_id:m_id}).then(function () {
                resolve({
                    status:200,
                    message: m_id+' machine data deleted'
                })
            }).catch(function (reason) {
                reject({
                    status:500,
                    message:m_id+' machine data delete failed'+reason
                })
            })
        })
    };



};

module.exports = new MachineController();