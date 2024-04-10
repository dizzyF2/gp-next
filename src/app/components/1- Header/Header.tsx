'use client'

import Link from "next/link"
import "./header.css"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import { NavLinks, NavLinks1 } from "@/app/constants"
import { Menu } from "lucide-react"
import { useState } from "react"

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const ToggleNavbar = () =>{
        setIsOpen(!isOpen);
    }

    const [Navbar, setNavbar] = useState(false)
    const changeBackground = () =>{
        if(window.scrollY >= 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);
    
    return (
        <header className='sticky z-[999] w-full flex justify-between items-center h-20 p-4 bg-[#7c7a7a18] dark:bg-[#333232b4] border-solid border-b-2 dark:border-[#3f3f4666]'>
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
                <div className='capitalize hover:bg-slate-300 p-1 rounded-xl hover:text-black'><Link href={"/"}> <h5>sign in</h5> </Link></div>
                <ThemeSwitch/>
            </div>
            </nav>
            <div className="md:hidden ml-auto flex items-center gap-3">
            <div className=" cursor-pointer hover:bg-slate-300 rounded-full p-2 duration-200" onClick={ToggleNavbar}><Menu size={20} color="black"/></div>
            <div><ThemeSwitch/></div>
            </div>

            {isOpen && (
                <div className="md:hidden z-50 dark:text-black">
                <div className="mt-5 absolute capitalize flex items-center flex-col space-y-2 font-bold drop-shadow-lg rounded-xl bg-[#ffffffee] border border-gray-300 py-8 left-6  right-6 dark:bg-[#333232f6] border-solid dark:border-[#3f3f46f3]">
                            {NavLinks1.map((link)=>(
                                <Link className="cursor-pointer p-2 last:mb-0 hover:bg-[#ff2625] hover:text-white duration-300 rounded-2xl dark:text-gray-200" href={link.href} key={link.key}>
                                    {link.text}
                                </Link>
                            ))}
                        <div className='capitalize cursor-pointer p-2 hover:bg-[#ff2625] hover:text-white duration-300 rounded-2xl dark:text-gray-200'><Link href={"/"}>sign In</Link></div>
                </div>
            </div>
            )}
        </header>
    )
}

export default Header