import banner1 from "../images/project1/banner1.jpg"
import banner2 from "../images/project1/banner2.jpg"
import banner3 from "../images/project1/banner3.jpg"
import banner21 from "../images/project2/banner1.jpg"
import banner22 from "../images/project2/banner2.jpg"
import banner23 from "../images/project2/banner3.jpg"

import html from "../images/project1/html.jpg"
import css from "../images/project1/css.jpg"
import js from "../images/project1/js.jpg"
import php from "../images/project1/php.jpg"
import sql from "../images/project1/sql.jpg"
import bootstrap from "../images/project1/bootstrap.jpg"
import laravel from "../images/project2/laravel.png"
import tailwind from "../images/project2/tailwind.png"

import {  FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react"

const Project = ()=>{
    
    const images1 =[
        banner1,
        banner2,
        banner3
    ]
    const images2 =[
        banner21,
        banner22,
        banner23
    ]    
    
    const [currentIndex, setCurrentIndex] =useState(0)

    useEffect(()=>{
        const slide = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex >= 2 ? 0 : prevIndex + 1)); 
        }, 2000);
        return ()=>clearInterval(slide)
    },[])


    return (
        <>
        <div className="bg-gray-900 ">
        <h1 className="text-4xl text-white font-semibold text-center pt-3" id="project">MY <span className="text-4xl text-cyan-400 font-semibold">PROJECT</span></h1>
        <div className="project border-b-2 border-cyan-400 pb-3 max-md:px-4">
        
            <div className="text-2xl text-cyan-500 text-center font-medium mt-3 max-md:text-xl">
                <p>WEBSITE SELLING ONLINE COURSES</p>
            </div>
            <div className="carousel flex justify-center mt-3">
                
                <div className="slide-image" style={{ width:"60%", minWidth:360 }}>
                    <img src={images1[currentIndex]} id="slide-image-pr-2" alt=""/>
                </div>
                
            </div>
            <div className="project-technology flex justify-center gap-3 mt-3 flex-wrap">
                <div>
                    <img src={html} alt=""/>
                </div>
                <div>
                    <img src={css} alt=""/>
                </div>
                <div>
                    <img src={js} alt=""/>
                </div>
                <div>
                    <img src={bootstrap} alt=""/>
                </div>
                <div>
                    <img src={php} alt=""/>
                </div>
                <div>
                    <img src={sql} alt=""/>
                </div>
        
        
            </div>
            <div className="project-btn flex justify-center gap-3 mt-3 max-md:px-4">
                <button className="btn-src text-white text-xl flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-md">
                    <span>
                        <a href="https://github.com/chucdoan2003/XTH_EZCODE_chucdbph33771" target="_blank">
                            Source code

                        </a>
                    </span>
                    <div className="iconts-github circle text-cyan-400 rounded-full border-cyan-400 border-2 w-7 h-7 flex items-center justify-center">
                        <FaGithub/>
                    </div>
                </button>
                <button className="btn-review text-white text-xl flex items-center gap-2 px-4 py-2 bg-green-400 rounded-md">
                    <span>
                        <a href="https://github.com/chucdoan2003/XTH_EZCODE_chucdbph33771" target="_blank">Review code</a>
                    </span>
        
                </button>
            </div>
        
        
        </div>
       
        <div className="project border-b-2 border-cyan-400 pb-3 max-md:px-4">
        
            <div className="project-title text-2xl text-cyan-500 text-center font-medium mt-3 max-md:text-xl">
                <p>WEBSITE SELLING FURNITURE</p>
            </div>
            <div className="carousel flex justify-center mt-3">
                <div className="slide-image" style={{ width:"60%", minWidth:360 }}>
                    <img src={images2[currentIndex]} id="slide-image-pr-2" alt=""/>
                </div>
            </div>
            <div className="project-technology flex justify-center gap-3 mt-3 flex-wrap">
                <div>
                    <img src={html} alt=""/>
                </div>
                <div>
                    <img src={js} alt=""/>
                </div>
                <div>
                    <img src={laravel} alt=""/>
                </div>
                <div>
                    <img src={php} alt=""/>
                </div>
                <div>
                    <img src={tailwind} alt=""/>
                </div>
                <div>
                    <img src={sql} alt=""/>
                </div>
        
        
            </div>
            <div className="project-btn flex justify-center gap-3 mt-3">
                <button className="btn-src text-white text-xl flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-md">
                    <span>
                        <a href="https://github.com/chucdoan2003/donoithat_laravel" target="_blank">
                        Source code
                        </a>
                    </span>
                    <div className="iconts-github circle text-cyan-400 rounded-full border-cyan-400 border-2 w-7 h-7 flex items-center justify-center">
                        <FaGithub/>
                    </div>
                </button>
                <button className="btn-review text-white text-xl flex items-center gap-2 px-4 py-2 bg-green-400 rounded-md">
                    <span>
                        <a href="https://github.com/chucdoan2003/donoithat_laravel" target="_blank">
                            Review code
                        </a>
                    </span>
        
                </button>
            </div>
        
        
        </div>
        <div className="line"></div>
        </div>
        </>
    )
}

export default Project