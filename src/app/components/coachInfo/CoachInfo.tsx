import "./coachinfo.css"


function CoachInfo() {
    return (
        <div className='right-container'>
            <video src="../../../../public/selfIntro.mp4" typeof="video/mp4" controls />
            
        <div className='info'>
            <h3>About</h3>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum laborum accusamus sed, 
                ullam voluptatibus nam pariatur repudiandae hic delectus labore similique nulla debitis 
                dolorem! Laboriosam commodi nostrum consequuntur harum sunt? 
            </p>
        </div>
        <div className='info'>
            <h3>Coach specialization</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Animi asperiores ducimus laboriosam</p>
        </div>
        <div className='info'>
            <h3>Schedule a lesson</h3>
            
        </div>
    </div>
    )
}

export default CoachInfo