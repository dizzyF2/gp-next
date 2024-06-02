'use client';

import { LogOut } from "lucide-react";
import { logoutAccount, navigate } from "../../../lib/actions/user.action";
import { getCurrentUser } from "../../../lib/appwrite";
import { redirect } from "next/navigation";



function LogoutButton() {
    const handleLogOut = async () =>{
        const loggedOut = await logoutAccount();

        if(loggedOut){
            redirect("/Login");
        }
    }
    
    return (
        <div className="hover:text-[#ff2625] cursor-pointer flex gap-3" onClick={handleLogOut}>
            <LogOut size={20} /><button >logOut</button>
        </div>
    )
}

export default LogoutButton