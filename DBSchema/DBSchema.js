const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    UserName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        req:true
    },

});

const PatientSchema=new Schema({
    PID:{
        type:String,
        require:true
    },
    Pname:{
        type:String,
        require:true
    },
    PtAge:{
        type:String,
        require:true
    },
    Condition:{
        type:String,
        require:true
    },
    Address:{
        type:String,
        require:true
    },
    Guardian:{
        type:String,
        require:true
    },
    NIC:{
        type:String,
        require:true
    },
    Priority:{
        type:String,
        require:true
    },
    MedicalHistory:{
        type:String,
        require:true
    },
    PatientStatus:{
        type:String,
        require:true
    },
    Treatments:{
        type:String,
        require:true
    },
    Tests:{
        type:String,
        require:true
    },
    Drugs:{
        type:String,
        require:true
    }
});

mongoose.model('UserDetalis',UserSchema);
mongoose.model('PatientDetails',PatientSchema);

mongoose.connect('mongodb://127.0.0.1:27017/Users',function (err) {
    if(err){
        console.log('DB Error');
        process.exit(-1);
    }
    console.log('DB Connected');
});

module.exports=mongoose;