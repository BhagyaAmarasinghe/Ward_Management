var mongoose = require('../DBSchema/SchemaMapper');
var diagnosticSchema = mongoose.model('Diagnostic');


var DiagnosticController =  function () {
    this.addDiagnostic = function (data) {
        return new Promise(function (resolve,reject) {
            var diagnostic = new diagnosticSchema({
                diag_id:data.diag_id,
                p_id:data.p_id,
                d_id:data.d_id,
                diagnostic:data.diagnostic,
                treatment:data.treatment
            });

            diagnostic.save().then(function () {
                resolve({
                    status:200,
                    message:'diagnostic successfully added'
                })
            }).catch(function (err) {
                reject({
                    status:500,
                    message:'could not add the diagnostic data'+err
                })
            })
        })
    };

    this.updateDiagnosis = function (diag_id,data) {
        return new Promise(function (resolve,reject) {
            diagnosticSchema.update({diag_id:diag_id},data).then(function () {
                resolve({
                    status:200,
                    message:'diagnosis updated successfully'
                })
            }).catch(function (err) {
                reject({
                    status:500,
                    message:'could not update the diagnosis'+err
                })
            })
        })
    };

    this.deleteDiagnosis = function (diag_id) {
        return new Promise(function (resolve, reject) {
            diagnosticSchema.remove({diag_id:diag_id}).then(function () {
                resolve({
                    status:200,
                    message:'diagnosis deleted successfully'
                })
            }).catch(function (err) {
                reject({
                    status:500,
                    message:'could not remove the diagnosis'
                })
            })
        })
    };

    this.viewDiagnosis = function (diag_id) {
        return new Promise(function (resolve, reject) {
            diagnosticSchema.find({diag_id:diag_id}).exec().then(function (data) {
                resolve({
                    status:200,
                    data:data
                })
            }).catch(function (err) {
                reject({
                    status:500,
                    message:'could not retrieve diagnosis data'+err
                })
            })
        })
    };

};

module.exports = new DiagnosticController();
