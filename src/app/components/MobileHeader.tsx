'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavLinks1 } from '../constants'
import ThemeSwitch from './ThemeSwitch/ThemeSwitch'
import { Menu } from 'lucide-react'

function MobileHeader() {
    const [ShowMenu, setShowMenu] = useState(false)
    const toggleShowMenu = () =>{
        setShowMenu(!ShowMenu)
    }
    return (
        <>
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
        </>
    )
}

export default MobileHeader