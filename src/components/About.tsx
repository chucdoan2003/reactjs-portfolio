import avt from "../images/avt.png"
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const About=()=>{
    return (
        <>
         <div className="about bg-gray-900 text-white flex flex-row flex-wrap justify-between px-14 pt-4 max-[891px]:justify-center max-md:flex max-md:flex-col max-md:items-center border-b-2 border-cyan-400" id="home">
            <div className="about-content">
                <p className=" text-xl font-bold ">Hello, It's Me</p>
                <p className="text-6xl font-bold my-2 max-md:text-4xl">Đoàn Bá Chúc</p>
                <p className=" text-xl font-bold">And i'm a <span className="about-major text-cyan-400">Backend developer</span></p>
                <div className="about-icons flex flex-row mt-2 ">
                    <div className=" text-cyan-400 rounded-full border-cyan-400 border-2 w-7 h-7 flex items-center justify-center mr-3">
                        {/* <i className="fa-brands fa-twitter"></i> */}
                        <FaTwitter/>

                    </div>
                    <div className=" text-cyan-400 rounded-full border-cyan-400 border-2 w-7 h-7 flex items-center justify-center mr-3">
                        <FaFacebook/>
                    </div>
                    <div className=" text-cyan-400 rounded-full border-cyan-400 border-2 w-7 h-7 flex items-center justify-center mr-3">
                        <FaGithub />
                    </div>
                    <div className=" text-cyan-400 rounded-full border-cyan-400 border-2 w-7 h-7 flex items-center justify-center mr-3">
                        <BiLogoInstagramAlt />
                    </div>
                </div>
                <button className="px-3 py-2 bg-cyan-400 rounded-md mt-3 font-medium ">
                    <a href="https://dochub.com/chucdb2003/7J4mQvgRv6eexJZRj2pO5n/%C4%91o%C3%A0n-b%C3%A1-ch%C3%BAc-7-pdf?dt=BVm8gEHebzyDjSqqiG2z"
                        target="_blank"
                    >
                    Review CV
                    </a>
                </button>
            </div>
            <div className="about-avt">
                <div className="rounded-full bg-cyan-400 w-96 h-96 max-md:w-80 max-md:h-80 overflow-hidden">
                    <img src={avt} className="w-full h-full object-cover " alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;