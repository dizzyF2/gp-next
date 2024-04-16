'use client'

import Link from "next/link"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import {NavLinks1 } from "@/app/constants"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { headers } from "next/headers"

function Header() {
    const [Navbar, setNavbar] = useState(false)
    const toggleNavbar = () =>{
        if(window.scrollY>50){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", toggleNavbar)
        return(
            window.addEventListener("scroll", toggleNavbar)
        )
    },[])
    
    const [ShowMenu, setShowMenu] = useState(false)
    const toggleShowMenu = () =>{
        setShowMenu(!ShowMenu)
    }

    return (
        <header className={Navbar? 'fixed duration-200 top-0 z-[999] w-full flex justify-between items-center h-20 p-4 bg-[#ecebeb] dark:bg-[#333232]'  : 'duration-300 top-0 z-[999] w-full flex justify-between items-center  h-20 p-4'}>
            <Link className={Navbar?"text-[#0f0] no-underline uppercase font-bold text-[1.5em]" : "text-[#0f0] no-underline uppercase font-bold text-[1.8em]"} href="/"><span>NutriSquad</span></Link>    
            <nav className="hidden md:flex justify-between items-center gap-16 text-base font-medium">
                <ul className="capitalize flex justify-between gap-6">
                    {NavLinks1.map((link)=>(
                        <Link className="hover:bg-slate-300 p-1 rounded-xl hover:text-black" href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            <div className="flex items-center gap-9">
                <div className='capitalize hover:bg-slate-300 p-1 rounded-xl hover:text-black'><Link href={"../SignIn"}> <h5>sign in</h5> </Link></div>
                <ThemeSwitch/>
            </div>
            </nav>
            <div className="md:hidden ml-auto flex items-center gap-3">
            <div className=" cursor-pointer hover:bg-slate-300 rounded-full p-2 duration-200" onClick={toggleShowMenu}><Menu size={20} color="black"/></div>
            <div><ThemeSwitch/></div>
            </div>
            <div className="absolute md:hidden z-[10000] left-0 top-20 w-full">
            {ShowMenu &&
                <div className="flex flex-col items-center gap-2 rounded-b-lg bg-[#fcfcfcc5] dark:bg-[#302f2fb4]">
                    <ul className="capitalize flex flex-col gap-2 items-center mt-3">
                        {NavLinks1.map((link)=>(
                            <Link className="hover:bg-[#ff2625] p-1 rounded-xl hover:text-white" href={link.href} key={link.key}>
                                {link.text}
                            </Link>
                        ))}
                    </ul>
                    <div className='capitalize hover:bg-[#ff2625] p-1 rounded-xl hover:text-white mb-3'><Link href={"../SignIn"}> <h5>sign in</h5> </Link></div>
                </div> 
            }
            </div>
            
        </header>
    )
}

export default Header