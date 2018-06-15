var mongoose = require('../DBSchema/SchemaMapper');
var wardSchema = mongoose.model('Ward');

var WardController = function() {
    this.insert = function (data) {
        return new Promise(function (resolve, reject) {
            var ward = new wardSchema({
                w_id: data.w_id,
                w_name: data.w_name,
                w_number: data.w_number
            });

            ward.save().then(function () {
                resolve({
                    status: 200,
                    message: 'ward successfully added'
                })
            }).catch(function (reason) {
                reject({
                    status: 500,
                    message: 'ward could not be added'
                })
            })
        })
    };

    this.updateWard = function (w_id, data){
        return new Promise(function(resolve,reject){
            wardSchema.update({w_id:w_id}, data).then(function(){
                resolve({
                    status:200,
                    message:'ward update failed'
                })
            }).catch(function(reason){
                reject({
                    status:500,
                    message:'ward data update failed ' + reason
                })
            })
        })
    };

    this.getWard = function(){
        return Promise(function(resolve,reject){
            wardSchema.find().exec.then(function(data){
                resolve({
                    status:200,
                    data:data
                })
            }).catch(function(reason){
                reject({
                    status:500,
                    message:'could not get ward data'+reason
                })
            })
        })
    };

    this.getOneWard = function(w_id){
      return new Promise(function(resolve,reject){
          wardSchema.find({w_id:w_id}).exec().then(function(data){
              resolve({
                  status:200,
                  data:data
              })
          }).catch(function(reason){
              reject({
                  status:500,
                  message:'could not get ward data'
              })
          })
      })
    };

    this.removeWard = function(w_id){
      return new Promise(function (resolve,reject){
          wardSchema.remove({w_id:w_id}).then(function(){
              resolve({
                  status:200,
                  mesage:'ward successfully removed'
              })
          }).catch(function(reason){
              reject({
                  status:500,
                  message:'ward could not be removed '+reason
              })
          })
      })
    };

};

module.exports = new WardController();
