'use client'

import Link from "next/link"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import {NavLinks1 } from "@/app/constants"
import { Menu } from "lucide-react"


function Header() {
    
    
    return (
        <header className='z-[999] w-full flex justify-between items-center h-20 p-4 bg-[#7c7a7a18] dark:bg-[#333232b4] border-solid border-b-2 dark:border-[#3f3f4666]'>
            <Link className="text-[#0f0] no-underline uppercase font-bold text-[1.8em]" href="/"><span>NutriSquad</span></Link>    
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
            <div className=" cursor-pointer hover:bg-slate-300 rounded-full p-2 duration-200"><Menu size={20} color="black"/></div>
            <div><ThemeSwitch/></div>
            </div>
        </header>
    )
}

export default Header