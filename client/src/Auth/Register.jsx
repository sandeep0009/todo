
import React, { useState } from 'react';
import Layout from '../Components/Layout';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const Register = () => {
  const navigate=useNavigate();
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");

  const handleSub=async(e)=>{
    e.preventDefault();
    console.log(name,email,password)
   try{
   

    const res=await axios.post("/api/v1/auth/register",{name,password,email});
    axios.defaults.baseURL="http://localhost:3001";
    if(res.data.success){ toast.success(res.data.message); navigate("/login");}
    else{ toast.error(res.data.message)}
   }
   catch(error)
   {
    console.log(error);
    toast.error("something went wrong");
   }

  }

  return (
    <Layout>
  
      <div className="register">
      <div className="form-register">
        <h1>Register Yourself</h1>
        <form onSubmit={handleSub}>
          <div>
            <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter your name" required />
          </div>
          <div>
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your e-mail" required />
          </div>
          <div>
            <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter your password" required />
          </div>
          <button type='submit' className='btn'>Register</button>
        </form>
      </div>
      </div>
      </Layout>
   
  );
};

export default Register;
