import Link from "next/link"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import {NavLinks1 } from "@/app/constants"
import MobileHeader from "../MobileHeader"
import { getCurrentUser } from "../../../../lib/appwrite"
import UserAvatar from "../UserAvatar"


async function Header() {
    
    const user = await getCurrentUser();

    return (
        <header className={'top-0 z-[999] w-full flex justify-between items-center h-20 p-4'}>
            {/* LOGO link */}
            <Link className={"text-[#0f0] no-underline uppercase font-bold text-[1.8em]"} href="/"><span>NutriSquad</span></Link>    
            {/* Pages links */}
            <nav className="hidden md:flex justify-between items-center gap-16 text-base font-medium">
                <ul className="capitalize flex justify-between gap-6">
                    {NavLinks1.map((link)=>(
                        <Link className="hover:bg-slate-300 p-1 rounded-xl hover:text-black" href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </nav>
            {/* LOGIN / ThemeSwitch */}
            <div className="hidden md:flex items-center gap-9">
                {user ? 
                <>
                    <UserAvatar/>
                </> 
                : <>
                    <div className='capitalize hover:bg-slate-300 p-1 rounded-xl hover:text-black'><Link href={"/Login"}> <h5>login</h5> </Link></div>
                </>
                }

                <ThemeSwitch/>
            </div>
            
            <MobileHeader/>
        </header>
    )
}

export default Header


{
    /* Navbar? 'fixed duration-200 top-0 z-[999] w-full flex justify-between items-center h-20 p-4 bg-[#ecebeb] dark:bg-[#333232]'  :  
    
        Navbar?"text-[#0f0] no-underline uppercase font-bold text-[1.5em]" : 
    */}