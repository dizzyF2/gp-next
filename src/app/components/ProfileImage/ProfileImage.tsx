import image1 from "../../../../public/BlankProfile.png"
import Image from "next/image"

type sizeProps={
    Width:number;
    Height:number;
}
function ProfileImage({Width, Height}:sizeProps) {
    return (
        <>
            <Image className='img1 rounded-[50%] object-cover shadow-[1px_3px_12px_#0000002e]' src={image1} alt='profile image' width={Width} height={Height}/>
        </>
    )
}

export default ProfileImage