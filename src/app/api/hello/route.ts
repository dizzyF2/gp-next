// import { NextResponse } from "next/server";
// import { DB } from "../../../../lib/mongodb";
// import User from "../../../../models/user";



// export async function  GET(){
//     await DB.connect();

//     const user = new User({
//         email: "sci.faris12002@alexu",
//         password: '112233',
//         provider: 'google',
//     })
//     await user.save();

//     return NextResponse.json({ message: 'Hello from Next.js!' })
// } 