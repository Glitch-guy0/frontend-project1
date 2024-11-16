import gsap from "gsap";
import Blackcard from "./card/Blackcard";
import Whitecard from "./card/Whitecard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";




gsap.registerPlugin(ScrollTrigger);

export default function Cards() {


    useGSAP(()=>{
        gsap.from("#cards > *",{
            y: 100,
            opacity: 0,
            stagger: 0.3,
            scrollTrigger: {
                trigger: "#cards > *",
                scroller: "body",
                scrub: 3,
                end: 'top 20%',
                start: 'top 85%'
            }
        })
    })
    return (
        <div id="cards" className=" p-8 gap-8  w-full flex justify-center flex-wrap">
            <Whitecard title1="Search engine" title2=" optimization"/>
            <Blackcard title1="Pay per click" title2=" advertising"/>
            <Blackcard title1="Social media" title2=" marketting"/>
            <Whitecard title1="E-mail" title2=" marketting"/>
        </div>


    )
}