let express = require("express");
let app = express();
let mongoose = require("mongoose");
// const { xx, xxx } = require("./app/contollers/webCon");
const  rout  = require("./app/routes/web/route");
require("dotenv").config();
app.use(express.json());

mongoose.connect(process.env.DBUrl).then(()=>{
    console.log("Connected to database");
});

app.use("",rout)


app.listen(process.env.Port);