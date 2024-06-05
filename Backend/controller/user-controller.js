const userModel = require("../model/user-model");
const bcrypt=require('bcrypt')
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "email is already useIn" });
    }
    const createUser=new userModel({name,email,password})
    const saveUser=await createUser.save
    res.send(saveUser)
 
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal server error");
  }
};

const login=async(req,res)=>{
  // try {
  //   const {email,password}=req.body;
  //   const user=await userModel.findOne({email})
  //   if(!user){
  //     return res.status(401).json({msg:"invalid email"})
  //   }
  // } catch (error) {
    
  // }
 const {email ,password}=req.body
 if(!email || !password){
  res.status(400).send("Plss fill all the fields")
 }
 
 try {
  const user=await userModel.findOne({email})
  const passwordcheck=await bcrypt.compare(password,user.password) 
  if(passwordcheck){
  const token=await user.generateToken()
  }
 } catch (error) {
  
 }
}
module.exports = { register,login };
