const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt =require('jsonwebtoken')
require("dotenv").config()
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        rerquire:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true})

userSchema.methods.genrateToken = async function(){
    const token=jwt.sign({_id:this._id.toString()},process.env.KEY)
    return token
}

userSchema.pre("save",async function(next){
   
    if(!user.isModified("password"))return next()
        try {
            const salt=await bcrypt.genSalt(10);
            const hashPassword=await bcrypt.hash(user.password,salt)
            user.password=hashPassword
            next()
        } catch (error) {
            next(error)
        }
})

const userModel=mongoose.model("User",userSchema)
module.exports=userModel