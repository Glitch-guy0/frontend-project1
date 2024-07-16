import rocket from "/images/paperrocket.jpg"
import { BsArrowUpRightCircleFill } from "react-icons/bs";







export default function Whitecard(props){
    return(
        <div name='card' className=" bg-slate-50 flex justify-between h-[45vh] w-[40vw] rounded-[30px] overflow-hidden p-6  border-b-[6px] border-black border-2" >
                <div className="flex flex-col items-start justify-between">
                    <p className="*:bg-green-300 *:rounded  *:text-4xl *:font-bold *:px-2">
                        <div className="w-fit">{props.title1}</div> <div className="w-fit">{props.title2}</div>
                    </p>
                    <a className="flex items-center text-sm font-semibold"><BsArrowUpRightCircleFill className="rounded-full bg-green-300 mr-2 text-3xl " />Learn More</a>
                </div>
                <img src={rocket} className="rounded-lg size-[150px] self-center"/>
            </div>
    )
}