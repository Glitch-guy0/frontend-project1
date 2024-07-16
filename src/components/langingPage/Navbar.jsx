import { useGSAP } from "@gsap/react"
import logo from "/images/logo.png"
import gsap from "gsap"






export default function Navbar(){

    useGSAP(()=>{
        gsap.from("nav *",{
            y: -100,
            opacity: 50,
            stagger: 0.1,
            delay: 0.3,
            duration: 0.5
        });

        
    })
    
    
    return(
        <nav  className=" w-full py-8 h-14 flex items-center justify-between">
                <img src={logo}  className=" h-8"/>
            <div id="routes" className="text-black text-md flex gap-4 items-center text-base">
                <a>About us</a>
                <a>Services</a>
                <a>Use Cases</a>
                <a>Pricing</a>
                <a>Blog</a>
                <a className="px-4 py-2 text-blue-500 border-2 border-blue-600 font-bold rounded-lg">Request a quote</a>
            </div>
        </nav>
    )
}