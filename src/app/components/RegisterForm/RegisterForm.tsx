'use client'

import Link from "next/link"
import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation";


function RegisterForm() {
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { 
        
    };
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-slate-300 dark:bg-[#18181b]">
            <div className="relative w-[380px] h-[480px]  rounded-lg overflow-hidden bg-[#a5a4a41f] dark:bg-[#333232ce] border-solid border-b-2 dark:border-[#3f3f4666]">
                <div className="absolute w-[380px] h-[480px] bg-gradient-to-r from-lime-500 via-lime-500 
                to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right">
                </div>
                <div className="absolute w-[380px] h-[480px] bg-gradient-to-r from-lime-500 via-lime-500 
                to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right">
                </div>
                <div className="absolute inset-1 rounded-lg z-10 p-5  bg-gray-200 dark:bg-[#333232] border-solid border-b-2 dark:border-[#3f3f4666]">
                    <form onSubmit={handleSubmit}>
                            <h2 className="text-x1 font-semibold text-lime-500 text-center mb-12">Sign up</h2>

                            <div className="relative flex flex-col mb-8">
                                <input
                                
                                    name="email"
                                    type="email"
                                    id="email"
                                    autoFocus
                                    placeholder=" "
                                    className="relative z-10 border-0 border-b-2 border-lime-500 h-10 
                                    bg-transparent text-black dark:text-gray-100 outline-none px-2 peer"
                                />

                                <label
                                    className="peer-focus:font-medium absolute text-sm duration-500 
                                    transform -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] 
                                    peer-focus:left-0 peer-focus:text-lime-500 text-lime-500 
                                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                    peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8"
                                >Email</label>
                            </div>

                            <div className="relative flex flex-col mb-8">
                                <input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoFocus
                                    placeholder=" "
                                    className="relative z-10 border-0 border-b-2 border-lime-500 h-10 
                                    bg-transparent text-black dark:text-gray-100 outline-none px-2 peer"
                                />

                                <label
                                    className="peer-focus:font-medium absolute text-sm duration-500 
                                    transform -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] 
                                    peer-focus:left-0 peer-focus:text-lime-500 text-lime-500 
                                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                    peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-8"
                                >Password</label>
                            </div>

                            <div className="flex justify-center">
                            <button type="submit" className="flex justify-center items-center py-1.5 text-gray-100 bg-lime-500 w-40 
                            rounded hover:bg-lime-600 hover-scale-105 duration-300 mb-5">Sign up</button>
                            </div>
                            

                            <p className="text-gray-500">already have an account? 
                            <Link href="../Login" className="ml-1 text-lime-500 hover:underline">Log in</Link>
                            </p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm


/*
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        if(!formData.get('email') || !formData.get('password')){
            setError("All field are necessary.");
            return;
        }

        try {
            const responseUserExist = await fetch(`/api/auth/userExists`, {
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: formData.get('email') }),
            })
            
            const { user } = await responseUserExist.json();

            if(user){
                setError("User already Exists.")
                return;
            }

            const response = await  fetch(`/api/auth/register`,{
                method:'POST',
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                }),
            });
            
            if(response.ok){
                const form = e.currentTarget;
                form.reset();
                router.push("/")
            }else{
                console.log("user registeration failed.");
            }

            console.log({response});
        } catch (error) {
            console.log("Error during registeration: ", error);
        }
        
    };
    */