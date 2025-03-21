let mongoose = require("mongoose");
let dbschema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    Pnumber:{
        type:Number,
        required:true,
        unique:true,
    }
})

let modelY=mongoose.model("employ",dbschema);
module.exports=modelY;