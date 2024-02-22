const express = require("express");
const app = express();
const path = require("path");
require("../db/data");
const register = require("../model/regsch");

const template = path.join(__dirname,"../template/views");
const staticpath = path.join(__dirname,'../public'); //use to export public files 
app.set("view engine","hbs");
app.set("views",template);
app.use(express.static(staticpath));
app.use(express.json());
//middleware is used in Express.js to handle URL-encoded form data.
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/register",async (req,res)=>{
     try{
         const passdata = req.body.Password;
         const confirmdata = req.body.confirmpassword;

         if( passdata === confirmdata){
            const registered = new register ({
                fullname : req.body.fullname,
                username : req.body.Username,
                email : req.body.email,
                phone : req.body.phone,
                password : passdata
            });
             const reeg = await registered.save();
             res.status(201).render("index");
             
         }
         else {
            res.send ( " your password doesn't match");
         }
     }catch(err){
        res.send(err);
     }
})

app.listen(8000,()=>{
    console.log("listening at the port 8000");
})