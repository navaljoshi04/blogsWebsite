import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';

const signup = async(req,res)=>{
    try{
       const {userName,email,password,role,phoneNumber} = req.body;
       if(!userName || !email || !password || !phoneNumber){
        return res.status(400).json({message:"All fields are required"})
       };
       const exist = await userModel.findOne({email});
       if(exist) {
        return res.status(400).json({error:"User Already Exist"})
       }
       const hashPassword = await bcrypt.hash(password,10);
       const user = await userModel.create({
         userName,
         email,
         password: hashPassword,
         role: role || "user",
         phoneNumber,
       });
       return res.status(200).json({message:"Signup Successfull",user:{
        userName:user.userName,
        email:user.email,
        role:user.role
       }})
    }
    catch(err){
    return res.status(400).json({message:"ERROR",error:err.message})
    }
}

export default signup