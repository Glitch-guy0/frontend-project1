import rocket from "/images/paperrocket.jpg"
import { BsArrowUpRightCircleFill } from "react-icons/bs";








export default function Blackcard(props){
    return(
        <div name='card' className=" bg-slate-950 flex h-[45vh] w-[40vw] rounded-[30px] overflow-hidden p-6  border-b-[6px] border-black border-2 *:text-white" >
                <div className="flex flex-col items-start justify-between w-1/2">
                    <p className="*:rounded *:px-2  *:text-4xl *:font-bold *:bg-white *:text-black leading-[5vh] w-full">
                        <div className="">{props.title1}</div> <div className="w-fit">{props.title2}</div>
                    </p>
                    <a className="flex items-center text-sm font-semibold"><BsArrowUpRightCircleFill className="rounded-full mr-2 text-3xl " />Learn More</a>
                </div>
                <img src={rocket} className="rounded-lg  size-[150px] self-center" />
            </div>
    )
}