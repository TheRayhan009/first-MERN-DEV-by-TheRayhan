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

    // console.log(data);

    data.save();
    res.send("User Saved in Database");
}

let del = async(req,res)=>{
    let UserPhoneNumber= req.body.Unumber ;
    let findUserData = await modelY.findOne({Pnumber:UserPhoneNumber});

    if(findUserData){
        let detUserData= await modelY.deleteOne({Pnumber:UserPhoneNumber});
        res.send("User Deleted");
    }
    else{
        res.send("User Not Found");
    }
} 

let edit = async(req,res)=>{
    // let OldUserPhoneNumber= req.body.OldPnumber;

    let { OldPnumber, Gname, Gage, GPnumber } = req.body;

    let findUserData = await modelY.findOne({Pnumber:OldPnumber});

    if(findUserData){
        let UPDUserData= await modelY.findOneAndUpdate({Pnumber:OldPnumber} ,{$set: { name: Gname, age: Gage, Pnumber: GPnumber }} ,{new:true} );
        
        res.send("User Updated");
    }
    else{
        res.send("User Not Found");
    }

}
module.exports={xx,insurt,del,edit};