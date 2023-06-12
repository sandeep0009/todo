import mongoose from "mongoose";

const ConnectDb=()=>{
    try{
        const connect=mongoose.connect(process.env.MONGO_URL);
        console.log("connected");

    }
    catch(error)
    {
        console.log(error);
    }
}
export default ConnectDb;