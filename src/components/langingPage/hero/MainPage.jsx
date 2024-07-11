import image from "/images/cast.png"




export default function MainPage() {
    return (
        <div className="w-full flex justify-between h-3/4">
            {/* text section */}
            <div className="text-black w-1/2 ml-16 flex flex-col items-start justify-evenly">
                <h1 className="text-[55px] font-semibold">
                    Navigating the digital landscape for success
                </h1>
                <div className="text-sm font-normal w-3/4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim provident eos eaque distinctio delectus amet facere magnam ipsum! Ex illo aliquam corporis?
                </div>
                <button className="bg-slate-950 rounded-lg text-white font-normal px-6 py-4">
                    Book a Consultation
                </button>
            </div>
            {/* image section */}
            <div className="flex items-center justify-center w-1/2">
                <img src={image} alt="" className=" h-3/4" />
            </div>
        </div>
    )
}