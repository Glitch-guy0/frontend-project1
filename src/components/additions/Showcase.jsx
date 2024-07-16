import { useGSAP } from "@gsap/react"
import adidas from "/images/company/adidas.png"
import ben from "/images/company/benadyl.png"
import ford from "/images/company/ford.png"
import nike from "/images/company/nike.jpg"
import roga from "/images/company/roga.png"
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
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1

            }
        })
    });
    return(
        <div id="showcase" className="w-full h-16  flex justify-evenly">
            <img src={adidas} alt="" />
            <img src={ben} alt="" />
            <img src={ford} alt="" />
            <img src={nike} alt="" />
            <img src={roga} alt="" />
        </div>
    )
}