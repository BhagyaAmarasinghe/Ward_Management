var mongoose = require('../DBSchema/SchemaMapper');
var testSchema = mongoose.model('Test');


var testController = function () {
    this.addTest = function(data){
        return new Promise(function (resolve, reject) {
            var test = new testSchema({
                t_id:data.t_id,
                t_name:data.t_name,
                t_price:data.t_price
            })

            test.save().then(function () {
                resolve({
                    status:200,
                    message:'test added successfully'
                })
            }).catch(function (err) {
                reject({
                    status:500,
                    message:'test could not be added'+err
                })
            })
        })
    }

    this.getByName = function(t_name){
        return new Promise(function (resolve, reject) {
            testSchema.find({t_name:t_name}).exec().then(function (data) {
                resolve({
                    status:200,
                    data:data
                })
            }).catch(function (err) {
                reject({
                    status:500,
                    message:'could not get the test data'
                })
            })
        })
    }
    this.updateTest = function(t_id,data) {
        return new Promise(function (resolve, reject) {
            testSchema.update({t_id:t_id},data).then(function () {
                resolve({
                    status:200,
                    message:'test data update successful'
                })
            }).catch(function (err) {
                reject({
                    status:500,
                    message:'could not update test data'
                })
            })
        })

    }

    this.deleteTest = function(t_id) {
        return new Promise(function (resolve, reject) {
            testSchema.remove({t_id:t_id}).then(function () {
                resolve({
                    status:200,
                    message:'test data deleted'
                })
            }).catch(function (err) {
                reject({
                    status:500,
                    message:'test data could not be deleted'
                })
            })
        })
    }




};

module.exports = new testController();