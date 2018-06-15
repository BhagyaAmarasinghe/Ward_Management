const mongoose=require("../DBSchema/SchemaMapper");
var billSchema=mongoose.model('Bill');

var Controller;
Controller = function () {
    this.createBill = function (data) {
        return new Promise(function (resolve, reject) {
            var bill = new billSchema({
                bill_id: data.bill_id,
                p_id: data.p_id,
                p_name: data.p_name,
                reg_date:data.reg_date,
                bill_date:data.bill_date,
                drugs: data.drugs,
                tests: data.tests,
                treatments:data.treatments,
                other:data.other,
                tot:data.tot

            });
            debugger;
            bill.save().then(function () {
                resolve({
                    status: 200,
                    message: "Bill created successfully"
                });
            }).catch(function (err) {
                reject({
                    status: 500,
                    message: "Error creating the bill"
                });

            })
        })
    };


    this.getAllBills = function () {
        return new Promise(function (resolve, reject) {
            billSchema.find().exec().then(function (data) {

                resolve({status: 200, data: data});

            }).catch(function (err) {
                reject({status: 404, message: error.message});
            })
        })

    };

    this.getBill = function (id) {
        return new Promise(function (resolve, reject) {
            billSchema.find({bill_id: id}).exec().then(function (User) {
                resolve({status: 200, data:User});

            }).catch(function (err) {
                reject({status: 404, message: err.message});
            })
        })

    };

    /*this.deleteBill=function(id){
        return new Promise(function(resolve,reject){
            billSchema.remove({bill_id:id}).exec().then(function(){
                resolve({status:200,message:'Drug successfully deleted'});
            }).catch(function (err) {
                reject({status:500,message:'Error deleting the drug'});
            })
        })
    };*/

    this.updateBill=function(id,data){
        return new Promise(function (resolve,reject) {
            billSchema.update({bill_id:id},data).exec().then(function () {
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