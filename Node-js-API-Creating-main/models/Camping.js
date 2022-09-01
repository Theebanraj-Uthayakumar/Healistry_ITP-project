const mongoose = require('mongoose');

const CampingSchema = mongoose.Schema({
    orgName:{
        type:String,
        require:true
    },
    cDate:{
        type:String,
        require:true
    },
    cTime:{
        type:String,
        require:true
    },
    cContact:{
        type:Number,
        require:true
    },
    venue:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    cImg:{
        type:String,
    },
})
module.exports = mongoose.model('Camping_Details', CampingSchema);