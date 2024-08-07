import { useGSAP } from "@gsap/react"
import trialLogo from "/images/illustrations/trial.svg"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"




// gsap.registerPlugin(ScrollTrigger);






export default function GetTrial(){

    useGSAP(()=>{
        gsap.fromTo("#trialLogo", {
            y: 50,
            
        }, {
            y: -50,
            scrollTrigger: {
                trigger: "#trialLogo",
                scroller: "body",
                scrub: 1
            }
        })
    })


    return(
        <div className=" bg-slate-200 rounded-3xl flex p-12 relative mx-12">
            <div className="w-2/5">
                <h2 className="font-semibold text-3xl">Let's make things happen</h2>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique neque perferendis labore ad, eveniet ullam. Dolor, gnam suscipit porro nesciunt ex!</p>
                <button className="mt-6 bg-black text-white px-8 py-4 rounded-xl font-semibold">Get your free proposal</button>
            </div>
            <img id="trialLogo" src={trialLogo} alt=""  className="absolute right-40 top-[-60px]"/>
        </div>
    )
}