import Blackcard from "./card/Blackcard";
import Whitecard from "./card/Whitecard";






export default function Cards() {
    return (
        <div className=" p-8 gap-8  w-full flex justify-center flex-wrap">
            <Whitecard title1="Search engine" title2=" optimization"/>
            <Blackcard title1="Pay per click" title2=" advertising"/>
            <Blackcard title1="Social media" title2=" marketting"/>
            <Whitecard title1="E-mail" title2=" marketting"/>
        </div>


    )
}