import usermodel from "../models/usermodel.js";
import {comparePassword, hashPassword} from "./../helper/authhelper.js";
import JWT from "jsonwebtoken";
export const registerController=async(req,res)=>{
    try{

        const {name,email,password}=req.body;
        console.log(req.body)
        if(!name) return res.send({success:false,message:"name is required"});
        if(!email) return res.send({success:false,message:"email is required"});
        if(!password) return res.send({success:false,message:"password is required"});

        const exituser=await usermodel.findOne({email})
        if(exituser) return res.status(200).send({message: "user exist already"});

        const hashedPassword= await hashPassword(password);
        const user= await usermodel({email,password:hashedPassword,name}).save();
        res.status(201).send({
            success:true,
            message:"successfully",
            user
          

        })
       


    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error"
        })
    }

}

export const loginController=async(req,res)=>{
   
    try{
        const {email,password}= req.body;
      
        if(!email || !password)
        {
            res.status(404).send({
                success:false,
                message:"invalid password or email"
            })
        }
       
        const user= await usermodel.findOne({email});
        console.log(`password ${password},user.password ${user.password}`);

        if(!user) return res.status(404).send({succcess:false,message:"email is not registered"});
        const match= await comparePassword(password,user.password);
        if(!match) return res.status(404).send({success:false,message:"invalid password"});
        const token= await JWT.sign({user},process.env.JWT_SECRET,{expiresIn:"2d"});
      
        res.status(200).send({
            succcess:true,
            message:"login successfully",
            user:{
                name:"user.name",
                email:"user.email"
            },token,
        })

    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({
        success:false,
        message:"error in login"
        })
    }
}

export const testController=(req,res)=>{
    console.log("protected route");

}


