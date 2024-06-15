import { redirect } from 'next/navigation'
import { getCurrentUser } from '../../../../../lib/appwrite'

async function User() {
    const user = await getCurrentUser()
    if(!user){
        redirect("/")
    }
    return(
        <div className='flex flex-col gap-5'>
            <div>
                {user?.name}
            </div>
            <div>
                {user?.email}
            </div>
        </div>
    )
}

export default User