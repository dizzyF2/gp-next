
import { MessageCircleMore, Star } from "lucide-react"
import "./sideprofile.css"
import Image from "next/image"
import image1 from "../../../../public/BlankProfile.png"
import Chatbox from "../chatbox/Chatbox"
import { useState } from "react"


function SideProfile() {
    const [showchatbox, setchatbox] = useState(false);
    return (
        <>
            <div className='profile-container pt-10 ml-5'>
                <div className="img-container">
                    <Image className='img1' src={image1} alt='profile image' width={100} height={100}></Image>
                    <span></span>
                </div>
                <div className="mt-4">
                    <h2>patrick henry</h2>
                    <div className="info flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                            <div className="flex justify-start gap-1">
                            <Star color="yellow" size={16} />
                            <Star color="yellow" size={16} />
                            <Star color="yellow" size={16} />
                            <Star color="yellow" size={16} />
                            <Star color="yellow" size={16} />
                            </div>
                            4.2
                        </div>
                        <div className="flex gap-2 w-fit cursor-pointer hover:text-yellow-400" onClick={()=>{setchatbox(!showchatbox)}}><p>message</p><MessageCircleMore size={25} /></div>
                    </div>
                </div>
            </div>
                {
                    showchatbox && (  
                        <Chatbox/>
                    )
                }
        </>
    )
}

export default SideProfile