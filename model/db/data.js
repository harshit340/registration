const mongoose = require("mongoose");
 require("../model/regsch");
mongoose.connect("mongodb://127.0.0.1/regdata")
.then(()=>{
    console.log("yes it is connected");
}).catch((err)=>{
    console.log(err);
})