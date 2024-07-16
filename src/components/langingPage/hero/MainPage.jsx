import { useGSAP } from "@gsap/react";
import image from "/images/cast.png";
import gsap from "gsap";

export default function MainPage() {
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from("#left-box *", {
      y: 200,
      opacity: 0,
      delay: 0.2,
      duration: 0.5,
      stagger: 0.2
    });

    tl.from("#right-box",{
        x: 200,
        opacity: 0,
        duration: 0.5,
        delay: -0.2,
        
    })
  });

  return (
    <div className="w-full flex justify-between h-3/4 overflow-hidden">
      {/* text section */}
      <div
        id="left-box"
        className="text-black w-1/2 ml-16 flex flex-col items-start justify-evenly"
      >
        <h1 className="text-[55px] font-semibold">
          Navigating the digital landscape for success
        </h1>
        <div className="text-sm font-normal w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim
          provident eos eaque distinctio delectus amet facere magnam ipsum! Ex
          illo aliquam corporis?
        </div>
        <button className="bg-slate-950 rounded-lg text-white font-normal px-6 py-4">
          Book a Consultation
        </button>
      </div>
      {/* image section */}
      <div id="right-box" className="flex items-center justify-center w-1/2">
        <img src={image} alt="" className=" h-3/4" />
      </div>
    </div>
  );
}
