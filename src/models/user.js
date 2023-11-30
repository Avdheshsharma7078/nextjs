import mongoose, { Schema } from "mongoose";

const UserSchema=new Schema({
    name:String,
    email:{
        type:String,
        required:[true,"Email is Required"],
        unique:true,
    },
    password:{
        type:String,
        require:true
        },
    about:String,
})
export const User=mongoose.model.users||mongoose.model("users",UserSchema)