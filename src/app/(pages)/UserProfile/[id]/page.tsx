import { getCurrentUser } from '../../../../../lib/appwrite'

async function User() {
    const user = await getCurrentUser();
    return(
        <div className='flex flex-col gap-5'>
            <>
                {user?.name}
            </>
            <>
                {user?.$id}
            </>
        </div>
    )
}

export default User