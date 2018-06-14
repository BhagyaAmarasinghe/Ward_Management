var mongoose=require('../DBSchema/DBSchema');
var UserSchema=mongoose.model('UserDetails');

var Usercontroller=function () {
    this.add=function (data) {
        return new Promise(function (resolve,reject) {
            var book=new UserSchema({
                UserName:data.UserName,
                password:data.password
            })

            book.save().then(function () {
                resolve({'status':200,'message':'Added!'});
            }).catch(function (err) {
                reject({'status':500,'message':'Error '+err});
            })
        })
    }

    this.fetchcall=function () {
        return new Promise(function (resolve,reject) {
            UserSchema.find().exec().then(function (data) {
                resolve({'status':200,'data':data});
            }).catch(function (err) {
                reject({'status':404,'message':'Not found'});
            })
        })
    }

    this.fetchsingle=function (UserName) {
        return new Promise(function (resolve,reject) {
            UserSchema.find({UserName: UserName}).exec().then(function (data) {
                resolve({'status':200,'message':'Item Found','data':data});
            }).catch(function (err) {
                reject({'status':404,'message':'Item Not found '+err});
            })
        })
    }

    this.edit=function (id,newdata) {
        return new Promise(function (resolve,reject) {
            UserSchema.update({id:id},newdata).then(function () {
                resolve({'status':200,'message':'Updated'});
            }).catch(function (err) {
                reject({'status':500,'message':'Error Updating'+err});
            })
        })

    }
    this.deletedata=function (id) {
        return new Promise(function (resolve,reject) {
            UserSchema.remove({id:id}).then(function () {
                resolve({'status':200,'message':'Deleted'});
            }).catch(function (err) {
                reject({'status':500,'message':'error Deleting '+err});
            })
        })

    }
}

module.exports=new Usercontroller();