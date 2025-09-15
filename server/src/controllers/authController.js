import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

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

const login = async(req,res)=>{
    try{
     const {email,password} = req.body;
     if(!email || !password) {
        return res.status(400).json({message:"All fields are required"});
     }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invalid Crediantials "})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Crediantials"})
        }
        const token = jwt.sign({_id:user._id,role:user.role},process.env.SECRET_KEY,{expiresIn:"1h"})
        res.cookie("token",token,{
            httpOnly:true,
        })
        return res.status(200).json({
          message: "Login Successfull",
          user: {
            name: user.userName,
            email: user.email,
            role: user.role,
            token,
          },
        });
    }
    catch(err){
        return res.status(400).json({message:"ERROR",error:err.message});
    }
}

const logout = async(req,res)=>{
    try{
          res.clearCookie("token",{
            httpOnly:true,
          });
          return res.status(200).json({message:"User Logout Successfully"});
    }
    catch(err){
        return res.status(400).json({message:"ERROR",error:err.message});
    }
}

export { signup, login, logout };