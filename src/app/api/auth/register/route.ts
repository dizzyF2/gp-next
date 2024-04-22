import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        const {email, password} = await request.json();
        //validation email and password here (video at 14:15)
        console.log({email, password});
    } catch (error) {
        console.log({error})
    }
    
    return NextResponse.json({message: "success"});
}