'use strict';

var mongoose  =  require ('mongoose');
const schema =   mongoose.Schema;

const DoctorSchema = new schema({
    d_id : {
        type:String,
        require:true,
        unique:true
    },
    d_name:{
        type:String,
        require:true
    },
    d_nic:{
        type:String,
        require:true
    },
    d_age:{
        type:Number,
        require:true
    },
    d_address:{
        type:String,
        require:true
    },
    d_telephone:{
        type:String,
        require:true
    },
    d_specialty:{
        type:String,
        require:true
    },
    d_ps:{
        type:String,
        require:true
    }


});

 const PatientSchema = new schema({
    p_name:{
        type:String,
        require:true
    },
     p_ps:{
        type:String,
         require:true
     }
});

 const MachineSchema = new schema({
     m_id:{
         type:String,
         require:true,
         unique:true
     },
     m_name:{
         type:String,
         require:true
     },
     m_price:{
         type:String,
         require:true
     }
 });

 const WardSchema = new schema({
     w_id:{
         type:String,
         require:true,
         unique:true
     },
     w_name:{
         type:String,
         require:true
     },
     w_number:{
         type:String,
         require:true
     }
 });

 const MaterialSchema = new schema({
     mat_id:{
         type:String,
         require:true,
         unique:true
     },
     mat_name:{
         type:String,
         require:true
     },
     mat_quantity:{
         type:Number,
         require:true
     },
     mat_price:{
         type:Number,
         require:true
     }
 });

const NurseSchema = new schema({
    nur_id: {
        type: String,
        require: true,
        unique:true
    },

    nur_name: {
        type: String,
        require: true
    },
    nur_nic: {
        type: String,
        require: true
    },
    nur_age: {
        type: String,
        require: true
    },
    nur_address: {
        type: String,
        require: true
    },
    nur_ward: {
        type: String,
        require: true
    },
    nur_priority_status: {
        type: String,
        require: true
    }
});

const AttendantSchema = new schema({
    att_id: {
        type: String,
        require: true,
        unique:true
    },

    att_name: {
        type: String,
        require: true
    },
    att_nic: {
        type: String,
        require: true
    },
    att_age: {
        type: String,
        require: true
    },
    att_address: {
        type: String,
        require: true
    },
    att_ward: {
        type: String,
        require: true
    }
});

const emergencyListSchema=new schema({
    d_id:{
        type:String,
        require:true,
        unique:true
    },
    d_name:{
        type:String,
        require:false
    },

    d_telephone:{
        type:String,
        require:true
    },
    d_specialty:{
        type:String,
        require:true
    },
    d_ps:{
        type:String,
        require:true
    }
});

const drugSchema=new schema({
    id:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:false
    },

    type:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    prescribed_for:[String]
});

const treatmentSchema=new schema({
    id:{
        type:String,
        require:true,
        unique:true
    },
    condition_name:{
        type:String,
        require:false
    },

    treatment:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
});

const diagnosticSchema = new schema({
    diag_id:{
      type:String,
      required:true,
        unique:true
    },
    p_id:{
        type:String,
        required:true
    },
    d_id:{
        type:String,
        required:true
    },
    diagnostic:{
        type:String,
        required:true
    },
    treatment:{
        type:String,
        required:true
    }

});

const billSchema=new schema({
    bill_id:{
        type:String,
        require:true,
        unique:true

    },
    p_id:{
        type:String,
        require:true
    },

    p_name:{
        type:String,
        require:true
    },
    reg_date:{
        type:String,
        require:true
    },
    bill_date:{
        type:String,
        require:true,

    },
    drugs:{
        type:String,
        require:false
    },

    tests:{
        type:String,
        require:false
    },
    treatments:{
        type:String,
        require:false
    },
    other:{
        type:String,
        require:false
    },
    tot:{
        type:String,
        require:true
    }
});


 mongoose.model('Ward',WardSchema);
 mongoose.model('Doctor',DoctorSchema);
 mongoose.model('Patient',PatientSchema);
 mongoose.model('Machine',MachineSchema);
 mongoose.model('Materials',MaterialSchema);
 mongoose.model('Nurse', NurseSchema);
 mongoose.model('Attendant', AttendantSchema);
 mongoose.model('EmergencyList',emergencyListSchema);
 mongoose.model('Drug',drugSchema);
 mongoose.model('Treatment',treatmentSchema);
 mongoose.model('Diagnostic',diagnosticSchema);
 mongoose.model('Bill',billSchema);


 mongoose.connect('mongodb://localhost:27017/WardManagement',function(err){
     if(err){
         console.log('error in database connection'+err);
         process.exit(-1);
     }
     console.log('successfully connected to the database')
 });

 module.exports = mongoose;

