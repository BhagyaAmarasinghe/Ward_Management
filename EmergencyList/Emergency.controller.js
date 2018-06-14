

var mongoose = require('../DBSchema/SchemaMapper');
var listSchema=mongoose.model('EmergencyList');
//var control=require('../Controller/controller');

var Controller;
Controller = function () {

    this.createList=function(data) {
        return new Promise(function (resolve, reject) {
            console.log(data.d_id);
            var listItem = new listSchema({
                d_id: data.d_id,
                d_name: data.name,
                d_telephone: data.d_telephone,
                d_speciality: data.d_speciality,
                d_ps: data.d_ps
            });
            listItem.save().then(function () {
                resolve({
                    status: 200,
                    message: "List Created Successfully"
                });
            }).catch(function (err) {
                reject({
                    status: 500,
                    message: "Error Creating the List"
                });

            })
        });
    };

        this.getList = function () {
            return new Promise(function (resolve, reject) {
                listSchema.find().exec().then(function (data) {
                    //control.getAllDoctors();
                    resolve({status: 200, data: data});

                }).catch(function (err) {
                    reject({status: 404, message: error.message});
                })
            })


    };

    this.deleteList=function(){
        return new Promise(function(resolve,reject){
            listSchema.remove().exec().then(function(){
                resolve({status:200,message:'List deleted'});
            }).catch(function (err) {
                reject({status:500,message:'Error deleting the list'});
            })
        })
    };
};
module.exports=new Controller();
