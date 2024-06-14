

function CoachInfo() {
    return (
        <div className='right-container flex flex-col gap-[10px] items-center flex-grow-[0.5]'>
            <div className="border-2 border-gray-300 dark:border-slate-500">
            <video controls src="/introduction.mp4" typeof="video/mp4" width={600} height={350}>
                your browser does not support video tag
            </video>
            </div>
            <div className='info border-b-2 border-solid border-black w-[600px] pb-[10px]'>
                <h3>About</h3>
                <p className="p-[5px_25px_10px_25px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum laborum accusamus sed, 
                    ullam voluptatibus nam pariatur repudiandae hic delectus labore similique nulla debitis 
                    dolorem! Laboriosam commodi nostrum consequuntur harum sunt? 
                </p>
            </div>
            <div className='info border-b-2 border-solid border-black w-[600px] pb-[10px]'>
                <h3>Coach specialization</h3>
                <p className="p-[5px_25px_10px_25px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Animi asperiores ducimus laboriosam</p>
            </div>
            <div className='info w-[600px] pb-[10px]'>
                <h3>Schedule a lesson</h3>
            </div>
        </div>
    )
}

export default CoachInfo