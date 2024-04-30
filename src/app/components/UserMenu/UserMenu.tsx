import React, { useState } from 'react'
import ProfileImage from '../ProfileImage/ProfileImage'
import { BadgeHelp, CircleUser, LogOut, Mails, Settings } from 'lucide-react';




function UserMenu() {

    const [open, setOpen] = useState(false);

    return (
        <div className='menu-container'>
            {/* ${open? 'opacity-100 visible translate-y-0 ease-in duration-300' : 'opacity-0 hidden translate-y-[-20px] ease-out'} */}
            <div className={`dropdown-menu flex flex-col text-black gap-5 items-start absolute z-50 bg-blue-500 rounded-xl px-5 py-[10px] w-[200px] top-[75px] right-[65px] before:content-[''] before:absolute before:top-[-5px] before:right-5 before:h-5 before:w-5 before:bg-blue-500 before:rotate-[45deg]`}>
                <h3 className='text-center'>Faris abdelbagi</h3>
                <ul className='flex flex-col gap-5'>
                    <li className='hover:text-[#ff2625] cursor-pointer flex gap-3'><CircleUser size={20}/> My profile</li>
                    <li className='hover:text-[#ff2625] cursor-pointer flex gap-3'><Mails size={20}/> inbox</li>
                    <li className='hover:text-[#ff2625] cursor-pointer flex gap-3'><Settings size={20}/> Settings</li>
                    <li className='hover:text-[#ff2625] cursor-pointer flex gap-3'><BadgeHelp size={20}/> Helps</li>
                    <li className='hover:text-[#ff2625] cursor-pointer flex gap-3'><LogOut size={20} /> Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default UserMenu