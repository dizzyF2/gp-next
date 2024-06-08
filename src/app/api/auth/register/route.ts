// import { NextResponse } from "next/server";
// import { DB } from "../../../../../lib/mongodb";
// import User from "../../../../../models/user";
// import bcrypt from "bcryptjs";


// export async function POST(request: Request){
//     try {
//         const {email, password} = await request.json();
//         console.log({email, password})
//         const hashedPassword = await bcrypt.hash(password, 10);

//         await DB.connect();
//         const user = new User({
//             email: "sci.faris12002@alexu",
//             provider: "google",
//         })
//         await user.save();

//         return NextResponse.json({message: "user registered."}, {status: 201});
//     } catch (error) {
//         return NextResponse.json({message: "an error occured while registering the user "}, {status: 500});
//     }
// }

// /* 
//     const user = new User({
//             email: "",
//             provider:""
//         })
// */


// /*  
//     try {
        
//         const {email, password} = await request.json();
//         const hashedPassword = await bcrypt.hash(password, 10);

//         await connectMongoDB();
//         await User.create({email, password:hashedPassword})

//     } catch (error) {
//         console.log({error})
//     }
    
//     return NextResponse.json({message: "success"});
// */