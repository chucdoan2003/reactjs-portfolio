import logo from "../images/logofpt.png"
import { FaMapLocation } from "react-icons/fa6";

const Education = ()=>{
    return (
        <>
        <div className="bg-gray-900 py-3 text-white ">
            <h1 className="myproject text-center mb-3 " id="education"> <span className="myproject-pr text-cyan-400 text-4xl font-semibold">EDUCATION</span></h1>

            <div className="education flex flex-row gap-5 justify-center flex-wrap">
                <div className="education-text ">
                    <p>FPT Polytechnic College (2022 - 2024)</p>
                    <p>Backend Developer</p>
                    <p>7th semester student</p>
                    <p className="flex items-center gap-2"> <FaMapLocation className="text-green-600"/><span>1, Trịnh Văn Bô, Bắc Từ Liêm, Hà Nội</span></p>
                </div>
                <div className="education-image-logo w-80">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Education