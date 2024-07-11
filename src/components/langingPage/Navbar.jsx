import logo from "/images/logo.png"






export default function Navbar(){
    return(
        <nav  className=" w-full py-8 h-14 flex items-center justify-between">
                <img src={logo}  className=" h-8 bg-red-800"/>
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