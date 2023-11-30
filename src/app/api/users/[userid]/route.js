import { NextResponse } from "next/server";
//dynamic route
export function DELETE(request,{params}){
    console.log(params.userId);
    return NextResponse.json(params)

}