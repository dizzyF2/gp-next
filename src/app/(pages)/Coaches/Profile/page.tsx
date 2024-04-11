'use client'

import CoachInfo from "@/app/components/coachInfo/CoachInfo";
import SideProfile from "@/app/components/sideProfile/SideProfile";
import { useState } from "react";

function CoachPage() {
    const [showchatbox, setchatbox] = useState(false);
    return (
        <div className="flex pt-12 pb-12 gap-28 relative">  
            <SideProfile/>
            <CoachInfo/>
        </div>
    )
}

export default CoachPage