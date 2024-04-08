import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 ">
            <div className="relative w-[380px] h-[480px] bg-gray-800 rounded-lg overflow-hidden">
                <div className="absolute w-[380px] h-[480px] bg-gradient-to-r from-lime-500 via-lime-500 
                to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right">
                </div>
                <div className="absolute w-[380px] h-[480px] bg-gradient-to-r from-lime-500 via-lime-500 
                to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right">
                </div>
                <div className="absolute inset-1 bg-gray-800 rounded-lg z-10 p-5">
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
                        rounded hover:bg-lime-600 hover-scale-105 duration-300 mb-8">Log in</button>

                        <p className="text-gray-500">don't have an account? <a href=""
                            className="text-lime-500 hover:underline">Sign as user</a> or <a href=""
                                className="text-lime-500 hover:underline">Sign as coach</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}