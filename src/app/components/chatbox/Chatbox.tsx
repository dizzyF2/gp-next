"use client";
import Image from "next/image"
import image1 from "../../../../public/user.png"
import { ChevronDown, ChevronUp,SendHorizontal } from "lucide-react"
import "./chatbox.css"
import { useState } from "react";


function Chatbox() {
    const [showchatbox, setchatbox] = useState(false);
    const toggleChatBox = () =>{
        setchatbox(!showchatbox)
    }
    return (
        <>
            <div className={`${showchatbox} w-72 fixed right-2 bottom-0 z-40`}>
                <div className="bg-[#3278FF] rounded-xl flex justify-between items-center p-1">
                    <div className="flex items-center pl-1">
                        <div className="logo w-10 h-10"><Image className="rounded-full w-full h-full" src={image1} width={25} height={25} alt=""></Image></div>
                        <div className="title pl-2">Faris</div>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#9693935d] cursor-pointer mr-2" onClick={toggleChatBox}>
                        {showchatbox ? (
                            <ChevronDown/>
                        ) : (
                            <ChevronUp/>
                        )}
                    </div>
                </div>
            </div>

            {showchatbox && (
                <div className="chat-container w-72 bottom-0 right-2 rounded-xl z-40">
                        <div className="bg-[#3278FF] rounded-t-xl flex justify-between items-center p-1 mb-2">
                            <div className="flex items-center pl-1">
                                <div className="logo w-10 h-10"><Image className="rounded-full w-full h-full" src={image1} width={25} height={25} alt=""></Image></div>
                                <div className="title pl-2">Faris</div>
                            </div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#9693935d] cursor-pointer mr-2" onClick={toggleChatBox}>
                                {showchatbox ? (
                                    <ChevronDown/>
                                ) : (
                                    <ChevronUp/>
                                )}
                            </div>
                        </div>
                    <div className="chat-body dark:bg-gray-800">
                        <p>message</p>
                    </div>
                    <footer className="p-1 dark:bg-gray-600">
                        <div className="input">
                        <input type="text" placeholder="send a message..." id="txtinput"></input>
                        </div>
                        <div className="send"><SendHorizontal className="" color="black" size={35} /></div>
                    </footer>
            </div>
            )}
        </>
    )
}


export default Chatbox
