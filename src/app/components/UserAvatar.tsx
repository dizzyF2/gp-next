import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { getCurrentUser } from "../../../lib/appwrite";
import { CircleUser, LogOut, Settings } from "lucide-react";
import LogoutButton from "./LogoutButton";
import ProfileImage from "./ProfileImage/ProfileImage";
import Link from "next/link";




const UserAvatar = async () => {
    
    const user = await getCurrentUser();

    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
        >
            <Avatar>
                <ProfileImage Width={40} Height={40}/>
            </Avatar>
        </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="">
            <DropdownMenuLabel className="">{user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="hover:text-[#ff2625] cursor-pointer flex gap-3"><CircleUser size={20}/> <Link href={`/UserProfile/${user?.$id}`}>My profile</Link></DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><div className="hover:text-[#ff2625] cursor-pointer flex gap-3"><Settings size={20}/> Settings</div></DropdownMenuItem>
            <DropdownMenuItem > <LogoutButton/> </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    );
};

export default UserAvatar;