const mongoose = require('mongoose');

const AmbulanceSchema = mongoose.Schema({
    organizationName:{
        type: String,
        require:true
    },
    Location:{
        type:String,
        require:true
    },
    aContact:{
        type:String,
        require:true
    },
    dutyHrs:{
        type:Number,
        require:true
    },
    noOfAmbulance:{
        type:Number,
        require:true
    },
    regSince:{
        type: Number,
        require:true
    },
    workingHos:{
        type:String,
        require:true
    },
    ambImg:{
        type:String,
        require:true
    },
    
})
module.exports = mongoose.model('Ambulance_Details', AmbulanceSchema);