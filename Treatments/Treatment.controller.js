const mongoose=require("../DBSchema/SchemaMapper");
var treatmentSchema=mongoose.model('Treatment');

var Controller;
Controller = function () {
    this.insertTreatment = function (data) {
        return new Promise(function (resolve, reject) {
            var Treatment = new treatmentSchema({
                id: data.id,
                condition_name: data.condition_name,
                treatment: data.treatment,
                price:data.price,

            });
            Treatment.save().then(function () {
                resolve({
                    status: 200,
                    message: "Treatment inserted successfully"
                });
            }).catch(function (err) {
                reject({
                    status: 500,
                    message: "Error inserting the Treatment"
                });

            })
        })
    };


    this.getAllTreatments = function () {
        return new Promise(function (resolve, reject) {
            treatmentSchema.find().exec().then(function (data) {

                resolve({status: 200, data: data});

            }).catch(function (err) {
                reject({status: 404, message: error.message});
            })
        })

    };

    this.getOneTreatment = function (id) {
        return new Promise(function (resolve, reject) {
            treatmentSchema.find({id: id}).exec().then(function (User) {
                resolve({status: 200, data:User});

            }).catch(function (err) {
                reject({status: 404, message: err.message});
            })
        })

    };

    this.deleteTreatment=function(id){
        return new Promise(function(resolve,reject){
            treatmentSchema.remove({id:id}).exec().then(function(){
                resolve({status:200,message:'Treatment deleted'});
            }).catch(function (err) {
                reject({status:500,message:'Error deleting the treatment'});
            })
        })
    };

    this.updateTreatment=function(id,data){
        return new Promise(function (resolve,reject) {
            treatmentSchema.update({id:id},data).exec().then(function () {
                resolve({
                    status:200,
                    message:"Updated"
                })
            }).catch(function (err) {
                reject({
                    status:500,
                    message:"Error updating"
                })
            })
        })
    }

};



module.exports=new Controller();

