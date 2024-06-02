import Image from "next/image";

function ExerciseDetail({exerciceDetail}:any) {

    const {bodyPart, gifUrl, name, target, equipment} = exerciceDetail;

    return (
    <div className="flex flex-col gap-2 lg:flex-row justify-evenly items-center p-20">
        <Image src={gifUrl} alt={name} width={600} height={600} loading="lazy"/>
        <div className="flex flex-col gap-5">
            <p className="font-bold text-4xl">{name}</p>
            <div className="flex gap-5">
                <button className="font-bold text-xl capitalize bg-[#ff2625] w-full text-white p-5 rounded-full">{bodyPart}</button>
                <button className="font-bold text-xl capitalize bg-[#ff2625] w-full text-white p-2 rounded-full">{target}</button>
            </div>
            <p className="font-bold text-2xl">{equipment}</p>
        </div>
        
    </div>
    )
}

export default ExerciseDetail