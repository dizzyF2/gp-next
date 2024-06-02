'use client'
import { useEffect, useRef, useState } from 'react';
import ProfileImage from './ProfileImage/ProfileImage';
import UserMenu from './UserMenu/UserMenu';
import LoggedInMenu from './LoggedInMenu';




function Icon() {
    
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])

    return (
        <>
            <div ref={menuRef}>{open && <LoggedInMenu/>}
                <div className='menu-trigger cursor-pointer'  onClick={()=>{setOpen(!open)}}>
                    <ProfileImage Width={40} Height={40}/>
                </div>
            </div>
            { /*<div className='capitalize hover:bg-slate-300 p-1 rounded-xl hover:text-black'><Link href={"../SignIn"}> <h5>LogIn</h5> </Link></div> */ }
        </>
        
    )
}

export default Icon


