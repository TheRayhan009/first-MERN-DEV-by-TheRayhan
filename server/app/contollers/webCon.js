let modelY = require("../models/model");

let xx = async(req,res)=>{
    let a = await modelY.find();
    res.send(a);
}

let insurt = async(req,res)=>{
    let data=new modelY({
        name:req.body.Uname,
        age:req.body.Uage,
        Pnumber:req.body.Unumber,
    })

    data.save();
}

let del = async(req,res)=>{
    
} 

module.exports={xx,insurt};