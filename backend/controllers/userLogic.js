//registerUser

const asyncHandler=require('express-async-handler');
const User=require('../models/userModel')
const generateToken=require('../config/generateToken')

const registerUser=asyncHandler(async(req,resp)=>{
      const {name,email,password,profile}=req.body;

      if(!name|| !email|| !password){
        resp.status(400);
        throw new Error("Enter All feilds");
      }

      const userExists=await User.findOne({email})

     if(userExists){
        resp.status(400);
        throw new Error("User already Exists");
     }

     const user=await User.create({
        name,
        email,
        password,
        profile
     });

     if(user){
        resp.status(201).json({
            _Id:user._Id,
            name:user.name,
            email:user.email,
            password:user.password,
            profile:user.profile,
            token:generateToken(user._Id)
        })
     }
     else{
        resp.status(400);
        throw new Error("Failed to create new User!");
     }
})

module.exports = { registerUser };
