import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header =()=>{
    const [showMenu, setShowMenu] = useState(false)
    const handleClick= ()=>{
        setShowMenu(!showMenu)
    }
    if(!showMenu){

    }

    return (
        <>
        <header className="flex flex-row justify-between bg-gray-900 text-white p-4 items-center max-md:relative border-b-2 border-cyan-400">
            <div className="portfolio_title max-md:flex-1 max-md:text-center">
                <p className=" text-2xl">Portfolio</p>
            </div>
            <nav className={showMenu ? "max-md:absolute top-10 right-0 max-md:bg-gray-900 text-white max-md:pt-5" : "max-md:absolute top-10 right-0 max-md:bg-gray-900 text-white max-md:pt-5 max-md:hidden" } >
                <ul className="ul list-none">
                    <li className="md:inline-block mx-3"><a href="#home">Home</a></li>
                    <li className="md:inline-block mx-3"><a href="#home">About</a></li>
                    <li className="md:inline-block mx-3"><a href="#project">Skill</a></li>
                    <li className="md:inline-block mx-3"><a href="#project">My Project</a></li>
                    <li className="md:inline-block ml-3"><a href="#education">Education</a></li>
                </ul>
            </nav>
            <div className="bars md:hidden" onClick={handleClick}>
                <FaBars />
            </div>
        </header>
        </>
    )
}
export default Header;