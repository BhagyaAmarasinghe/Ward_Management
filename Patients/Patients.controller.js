var mongoose=require('../DBSchema/DBSchema');
var PatientSchema=mongoose.model('PatientDetails');

var Patientcontroller=function () {
    this.add=function (data) {
        return new Promise(function (resolve,reject) {
            var patient=new PatientSchema({
                PID:data.PID,
                Pname:data.Pname,
                PtAge:data.PtAge,
                Condition:data.Condition,
                Address:data.Address,
                Guardian:data.Guardian,
                NIC:data.NIC,
                Priority:data.Priority,
                MedicalHistory:data.MedicalHistory,
                PatientStatus:data.PatientStatus,
                Treatments:data.Treatments,
                Tests:data.Tests,
                Doctor:data.Doctor,
                Drugs:data.Drugs,
                Date:data.Date
            })

            patient.save().then(function () {
                resolve({'status':200,'message':'Added!'});
            }).catch(function (err) {
                reject({'status':500,'message':'Error '+err});
            })
        })
    }

    this.fetchall=function () {
        return new Promise(function (resolve,reject) {
            PatientSchema.find().exec().then(function (data) {
                resolve({'status':200,'data':data});
            }).catch(function (err) {
                reject({'status':404,'message':'Not found'});
            })
        })
    }

    this.fetchsingle=function (PID) {
        return new Promise(function (resolve,reject) {
            PatientSchema.find({PID: PID}).exec().then(function (data) {
                resolve({'status':200,'message':'Item Found','data':data});
            }).catch(function (err) {
                reject({'status':404,'message':'Item Not found '+err});
            })
        })
    }

    this.edit=function (PID,newdata) {
        return new Promise(function (resolve,reject) {
            PatientSchema.update({PID:PID},newdata).then(function () {
                resolve({'status':200,'message':'Updated'});
            }).catch(function (err) {
                reject({'status':500,'message':'Error Updating'+err});
            })
        })

    }
    this.deletedata=function (PID) {
        return new Promise(function (resolve,reject) {
            PatientSchema.remove({PID:PID}).then(function () {
                resolve({'status':200,'message':'Deleted'});
            }).catch(function (err) {
                reject({'status':500,'message':'error Deleting '+err});
            })
        })

    }
}

module.exports=new Patientcontroller();