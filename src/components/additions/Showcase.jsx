import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"


gsap.registerPlugin(ScrollTrigger);


export default function Showcase(){


    useGSAP(()=>{
        gsap.from("#showcase > img", {
            opacity: 0,
            y: 100,
            stagger: 0.1,
            scrollTrigger:{
                trigger: "#showcase",
                scroller: "body",
                start: 'top 70%',
                end: 'top 35%',
                scrub: 1,

            }
        })
    });
    return(
        <div id="showcase" className="w-full h-16  flex justify-evenly">
            <img src="/images/company/adidas.png" alt="" />
            <img src={"/images/company/benadyl.png"} alt="" />
            <img src={"/images/company/ford.png"} alt="" />
            <img src={"/images/company/nike.jpg"} alt="" />
            <img src={"/images/company/roga.png"} alt="" />
        </div>
    )
}