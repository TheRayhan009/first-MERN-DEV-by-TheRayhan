let express = require("express");
const { xx, insurt, edit ,del} = require("../../contollers/webCon");

let rout = express.Router();

rout.get("/",xx)
rout.post('/insurt',insurt)
rout.post('/del',del)
rout.post('/edit',edit)


module.exports=rout;