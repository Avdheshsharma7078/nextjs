import { connectdb } from "@/helper/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connectdb();
export async function GET(){

  //get all usrs

  let users=[]
  try {
    users=await User.find()
  } catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"failed to get usrs",
        success:false,
    })
  }
return NextResponse.json(users);

}

//create user

export async function POST(request){

// fetch  user detail from request

const {name,email,password,about}=await request.json()
console.log({name,email});
//create user object with user model
const user=new User({
    name,email,password,about,
});
try {
   //save the user
    const createdUser=await user.save()
    
    const response=NextResponse.json(
        user,{status:201,
        }
    )
    return response;
} catch (error) {
    return NextResponse.json({
        message:"fail to create user",
        status:false,
    })
}
// const body=request.body
// // console.log(body);
// // console.log(request.nextUrl.pathname);
// const jsonData=await request.json();
// console.log(jsonData);
// return NextResponse.json({
//     message:"posting user data"
// })
}

export async function DELETE(){
try {
    
} catch (error) {
    
}
}

export function PUT(){

}