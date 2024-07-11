import { MdOutlineArrowOutward } from "react-icons/md";









export default function Info(props) {
    return (
        <section className="px-12 flex flex-col ">
            <p>{props.info}</p>
            <a className="text-green-300 mt-10">Learn More <MdOutlineArrowOutward className="inline text-3xl font-bold" /></a>
        </section>
    )
}