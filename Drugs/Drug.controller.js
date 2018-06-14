const mongoose=require("../DBSchema/SchemaMapper");
var drugSchema=mongoose.model('Drug');

var Controller;
Controller = function () {
    this.insertDrug = function (data) {
        return new Promise(function (resolve, reject) {
            var drug = new drugSchema({
                id: data.id,
                name: data.name,
                type: data.type,
                price:data.price,
                prescribed_for:data.prescribed_for
            });
            drug.save().then(function () {
                resolve({
                    status: 200,
                    message: "Drug inserted successfully"
                });
            }).catch(function (err) {
                reject({
                    status: 500,
                    message: "Error inserting the drug"
                });

            })
        })
    };


    this.getAllDrugs = function () {
        return new Promise(function (resolve, reject) {
            drugSchema.find().exec().then(function (data) {

                resolve({status: 200, data: data});

            }).catch(function (err) {
                reject({status: 404, message: error.message});
            })
        })

    };

    this.getOneDrug = function (id) {
        return new Promise(function (resolve, reject) {
            drugSchema.find({id: id}).exec().then(function (User) {
                resolve({status: 200, data:User});

            }).catch(function (err) {
                reject({status: 404, message: err.message});
            })
        })

    };

    this.deleteDrug=function(id){
        return new Promise(function(resolve,reject){
            drugSchema.remove({id:id}).exec().then(function(){
                resolve({status:200,message:'Drug successfully deleted'});
            }).catch(function (err) {
                reject({status:500,message:'Error deleting the drug'});
            })
        })
    };

    this.updateDrug=function(id,data){
        return new Promise(function (resolve,reject) {
            drugSchema.update({id:id},data).exec().then(function () {
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