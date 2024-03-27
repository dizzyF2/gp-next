import Link from "next/link"
import "./header.css"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import { NavLinks } from "@/app/constants"

function Header() {
    return (
        <header className='bg-[#f3efefd5] dark:bg-[#333232b4] border-solid border-b-2 dark:border-[#3f3f4666]'>
            <Link className="logo" href="/"><span>NutriSquad</span></Link>    
            <nav className="navi">
                <ul className="capitalize">
                    {NavLinks.map((link)=>(
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            <ThemeSwitch/>
            <div className='signIn capitalize'><Link href={"/"}>sign In</Link></div>
            </nav>
        </header>
    )
}

export default Header