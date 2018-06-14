var mongoose    = require('../mongoose.config');
var AttendantSchema 	= mongoose.model('Attendant');
var AttendantController = function() {

    this.add = function(userInstance) {
        return new Promise((resolve, reject) => {
            var attendant = new AttendantSchema({
                name: userInstance.name,
                nic: userInstance.nic,
                age: userInstance.age,
                address: userInstance.address,
                ward: userInstance.ward,
            })
            attendant.save().then(() => {
                resolve({'status': 200, 'message':'added new user'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.getAll = function() {
        return new Promise((resolve, reject) => {
            AttendantSchema.find().exec().then(data => {
                resolve({'status': 200, 'message':'get all data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.getSingle = function(id) {
        return new Promise((resolve, reject) => {
            AttendantSchema.find({_id: id}).exec().then(data => {
                resolve({'status': 200, 'message':'get single data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.update = function(id, updateData) {
        return new Promise((resolve, reject) => {
            AttendantSchema.update({_id: id}, updateData).then(() => {
                resolve({'status': 200, 'message':'update user'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.delete = function(id) {
        return new Promise((resolve, reject) => {
            AttendantSchema.remove({_id: id}).then(() => {
                resolve({'status': 200, 'message':'delete user'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

}

module.exports = new AttendantController();