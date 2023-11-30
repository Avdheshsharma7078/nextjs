import mongoose from "mongoose";
import { User } from "@/models/user";
export const connectdb = async()=>{

    try{
  const {connection}=   await   mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"work_manager",
        })
        console.log("db connected....");

        
        //creating user
     const user=   new User({
            // name:"test name",
            // email:"test@gmail.com",
            // password:"testpassword",
            // about:"about"
        })
        await user.save();

        console.log("user is created");
    }
    catch(error){
        console.log("failed to connect with db",error);
    }
};