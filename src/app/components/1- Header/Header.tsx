import Link from "next/link"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import MobileHeader from "../MobileHeader"



function Header() {
    
    return (
        <header className={'fixed top-0 z-[999] bg-[#eeebeb] border-b-[3px] border-[#d1cfcf] dark:border-[#29292b] dark:bg-[#18181b] w-full flex justify-between items-center h-20 p-4'}>
            {/* LOGO link */}
            <Link className={"text-[#0f0] no-underline uppercase font-bold text-[1.8em]"} href="/"><span>NutriSquad</span></Link>    
            {/* Pages links */}
            <nav className="hidden md:flex justify-between items-center gap-16 text-base font-medium">
                <ul className="capitalize flex justify-between gap-6">
                <Link href="/Recipes" className="hover:bg-[#ff2625] p-3 rounded-xl hover:text-white">Recipes</Link>
                <Link href="/Exercises" className="hover:bg-[#ff2625] p-3 rounded-xl hover:text-white">Exercises</Link>
                <Link href="/Gym" className="hover:bg-[#ff2625] p-3 rounded-xl hover:text-white">Gym</Link>
                <Link href="/Proteins" className="hover:bg-[#ff2625] p-3 rounded-xl hover:text-white">Proteins</Link>
                </ul>
            </nav>
            {/* LOGIN / ThemeSwitch */}
            <div className="hidden md:flex items-center gap-9">
                {/* {user ? 
                <>
                    <UserAvatar/>
                </> 
                : <>
                    <div className='capitalize hover:bg-slate-300 p-1 rounded-xl hover:text-black'><Link href={"/Login"}> <h5>login</h5> </Link></div>
                </>
                } */}

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


    /**
     * <nav className="hidden md:flex justify-between items-center gap-16 text-base font-medium">
                <ul className="capitalize flex justify-between gap-6">
                    {NavLinks1.map((link)=>(
                        <Link className="hover:bg-[#ff2625] p-3 rounded-xl hover:text-white" href={link.href} key={link.key}>{link.text}</Link>
                    ))}
                </ul>
            </nav>
     * 
     */