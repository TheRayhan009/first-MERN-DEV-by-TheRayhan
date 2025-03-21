let express = require("express");
const { xx, insurt } = require("../../contollers/webCon");

let rout = express.Router();

rout.get("/",xx)
rout.post('/insurt',insurt)

module.exports=rout;