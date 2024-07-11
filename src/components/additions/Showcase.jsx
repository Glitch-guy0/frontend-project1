import adidas from "/images/company/adidas.png"
import ben from "/images/company/benadyl.png"
import ford from "/images/company/ford.png"
import nike from "/images/company/nike.jpg"
import roga from "/images/company/roga.png"





export default function Showcase(){
    return(
        <div className="w-full h-16  flex justify-evenly">
            <img src={adidas} alt="" />
            <img src={ben} alt="" />
            <img src={ford} alt="" />
            <img src={nike} alt="" />
            <img src={roga} alt="" />
        </div>
    )
}