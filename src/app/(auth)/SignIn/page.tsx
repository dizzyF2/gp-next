import Link from "next/link";


export default function Login() {

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-slate-300 dark:bg-[#18181b] ">
            <div className="relative w-[380px] h-[480px] rounded-lg overflow-hidden bg-[#a5a4a41f] dark:bg-[#333232ce] border-solid border-b-2 dark:border-[#3f3f4666]">
                <div className="absolute w-[380px] h-[480px] bg-gradient-to-r from-lime-500 via-lime-500 
                to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right">
                </div>
                <div className="absolute w-[380px] h-[480px] bg-gradient-to-r from-lime-500 via-lime-500 
                to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right">
                </div>
                <div className="absolute inset-1 rounded-lg z-10 p-5 bg-gray-200 dark:bg-[#333232] border-solid border-b-2 dark:border-[#3f3f4666]">
                    <form >
                        <h2 className="text-x1 font-semibold text-lime-500 text-center mb-12">Sign in</h2>
                        <div className="relative flex flex-col mb-8">
                            <input
                                type="email"
                                id="email"
                                autoFocus
                                placeholder=" "
                                className="relative z-10 border-0 border-b-2 border-lime-500 h-10 
                                bg-transparent text-gray-100 outline-none px-2 peer"

                            />

                            <label
                                className="peer-focus:font-medium absolute text-sm duration-500 
                                transform -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] 
                                peer-focus:left-0 peer-focus:text-lime-500 text-lime-500 
                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8"
                            >Enter Email</label>
                        </div>

                        <div className="relative flex flex-col mb-8">
                            <input
                                type="password"
                                id="password"
                                autoFocus
                                placeholder=" "
                                className="relative z-10 border-0 border-b-2 border-lime-500 h-10 
                                bg-transparent text-gray-100 outline-none px-2 peer"
                            />

                            <label
                                className="peer-focus:font-medium absolute text-sm duration-500 
                                transform -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] 
                                peer-focus:left-0 peer-focus:text-lime-500 text-lime-500 
                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8"
                            >Enter Password</label>
                        </div>

                        <button type="submit" className="py-1.5 text-gray-100 bg-lime-500 w-full 
                        rounded hover:bg-lime-600 hover-scale-105 duration-300 mb-8"><Link href={"/"}>Log in</Link></button>

                        <p className="text-gray-500">you dont have an account? 
                        <Link href={"../Register"} className="ml-1 text-lime-500 hover:underline">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}