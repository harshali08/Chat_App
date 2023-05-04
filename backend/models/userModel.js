const mongoose=require('mongoose')

const userModel=mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true,unique:true},
    password:{type:String , required:true},
    profile:{
        type:String,

        default:"https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg"
    }

},{
    timestamps:true,
})

const User=mongoose.model("User",userModel)

module.exports=User