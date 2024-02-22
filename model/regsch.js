const mongoose = require("mongoose");


const publicdata = new mongoose.Schema({
    "fullname" :{
        type : String ,
        required : true ,
    },
    "username":{
        type: String ,
        required : true ,
        unique : true,
    },
    "email" : {
        type: String,
        required : true ,
    },
    "phone" : {
        type:Number,
        required : true ,
    },
    "password":{
        type:String,
        required : true,
    }
    
});

const Register = new mongoose.model("Register",publicdata);
module.exports = Register;