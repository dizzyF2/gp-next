import Image from "next/image"
import Link from "next/link"


function ExerciseVideos({exerciseVideos, name}:any) {

    console.log(exerciseVideos);

    if (!exerciseVideos || exerciseVideos.length === 0) return <div>Loading...</div>;

    return (
    <div className="lg:mt-36 mt-1 p-5 flex-col justify-center items-center">
        <h1 className="mb-8 lg:text-5xl capitalize text-3xl">Watch <span className="text-[#ff262f]">{name}</span> exercise Videos</h1>
        <div className="flex justify-center lg:justify-start flex-wrap items-center lg:flex-row lg:gap-[110px] sm:gap-1">
            {exerciseVideos?.slice(0,6).map((item:any, index:any) =>(
                <Link key={index} 
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center w-[400px]"
                >
                    <Image src={item.video.thumbnails[0].url} alt={item.video.title} width={400} height={400} />
                    <div>
                        <h5 className="mt-3 text-3xl font-extrabold text-black dark:text-white">{item.video.title}</h5>
                    </div>
                    <div>
                        <h5 className="mt-3 text-2xl text-black dark:text-white">{item.video.channelName}</h5>
                    </div>
                </Link>

            ))}
        </div>
    </div>
    )
}

export default ExerciseVideos