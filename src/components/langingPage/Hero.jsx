import MarginLarge from "../additions/MarginLarge"
import MarginSmall from "../additions/MarginSmall"
import Showcase from "../additions/Showcase"
import TopicHighlight from "../additions/TopicHighlight"
import Cards from "../serviceHighlight/Cards"
import Comments from "../serviceHighlight/eyecatchers/Comments"
import GetTrial from "../serviceHighlight/eyecatchers/GetTrial"
import MainPage from "./hero/MainPage"
import Navbar from "./Navbar"



// this section makes the initial langing page
// containing navbar, and other stuff.
export default function Hero() {
    return (
        // remove the bgcol defined
        <>
            <div className="w-full h-full text-white">
                {/* navbar */}
                <Navbar />
                <MarginSmall />
                {/* main hero section */}
                <MainPage />

            </div>
            {/* company showcase */}
            <Showcase />
            {/* a margin to separate things */}
            <MarginLarge />
            {/* service topic highlight */}
            <TopicHighlight title="Service" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, recusandae quam? Aperiam sint tempora soluta temporibus magni impedit illum ipsam, a excepturi quia quisquam ea ullam eligend" />
            {/* cards section */}
            <Cards />
            <MarginSmall />
            <MarginLarge />
            <GetTrial />
            <MarginLarge />
            <MarginSmall />
            
            <TopicHighlight title="Case Study" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, recusandae quam? Aperiam sint tempora soluta temporibus magni impedit illum ipsam, a excepturi quia quisquam ea ullam eligend" />
            <MarginSmall />
            <Comments />
            <MarginLarge />
        </>
    )
}