'use client';

import { LogOut } from "lucide-react";
import { logoutAccount } from "../../../lib/actions/user.action";




function LogoutButton() {
    const handleLogOut = async () =>{
        await logoutAccount();
    }
    
    return (
        <div className="hover:text-[#ff2625] cursor-pointer flex gap-3" >
            <LogOut size={20} /><button onClick={handleLogOut}>logOut</button>
        </div>
    )
}

export default LogoutButton