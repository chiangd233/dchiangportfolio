import React from "react";
import "../styles/Home.css"
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGithubSquare, FaNodeJs, FaLinkedin, FaGithub} from "react-icons/fa"
import {SiDjango, SiPostgresql, SiExpress, SiMaterialui, SiHeroku} from "react-icons/si"
import {DiMongodb} from "react-icons/di"
import {MdEmail} from"react-icons/md"
import Photo from "../assets/IMG_0367.JPG"


function Home() {
    return <div className="home">
        <div className="about"> 
            <h2>Dominick Chiang</h2>
            <h3>Full Stack Software Engineer</h3>
            <h3>Water Wastewater Engineer</h3>
            <div className="prompt">
                <p>Experienced Full-Stack Engineer with a history of working in the field of web development with programs such as React, Javascript, CSS, HTML, React and Python.</p>
                <a className="link" href="https://www.linkedin.com/in/dominick-chiang-e-i-t-30751182/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a className="link" href="https://github.com/chiangd233" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                < a className="link" href="mailto:chiangd233@gmail.com">
                    <MdEmail />
                </a>
            </div>
        </div>
        <div className="Skills"> 
            <h1>Programming Skills</h1> 
            <ol className="list">
                <li className="item">
                    <div className="software">
                        <span><FaCss3Alt /></span>
                        <p>CSS</p>
                    </div>
                    <div className="software">
                        <span><SiDjango /></span>
                        <p>Django</p>
                    </div>
                    <div className="software">
                        <span><SiExpress /></span>
                        <p>Express</p>
                    </div>
                    <div className="software">
                        <span><FaGithubSquare /></span>
                        <p>Github</p>
                    </div>
                    <div className="software">
                        <span><SiHeroku /></span>
                        <p>Heroku</p>
                    </div>
                    <div className="software">
                        <span><FaHtml5 /></span>
                        <p>HTML</p>
                    </div>
                    <div className="software">
                        <span><FaJs /></span>
                        <p>Javascript</p>
                    </div>
                    <div className="software">
                        <span><SiMaterialui /></span>
                        <p>Material UI</p>
                    </div>
                    <div className="software">
                        <span><DiMongodb /></span>
                        <p>MongoDB</p>
                    </div>
                    <div className="software">
                        <span><FaNodeJs /></span>
                        <p>Node JS</p>
                    </div>
                    <div className="software">
                        <span><SiPostgresql /></span>
                        <p>PostgreSQL</p>
                    </div>
                    <div className="software">
                        <span><FaPython /></span>
                        <p>Python</p>
                    </div>
                    <div className="software">
                        <span><FaReact /></span>
                        <p>React</p>
                    </div>
                </li>
            </ol>
        </div>
        <div className="divone">
            <div className="description">
            <h1>About</h1>
                <p>Hi! My name is Dominick!</p>
                <p>I have been a Full Stack Engineer for about 7 months with experience in React, Python, Javascript, and much more! I found interest in coding after realizing how much of the current world runs on softwares and I wanted to increase my skill set. My favorite framework is the React Django REST framework as I love using python and love taking on a challenge! </p>
                <p>Apart from being a Full Stack Engineer, I am also a Water Wastewater Engineer, focusing on designing of wastewater treatment plants, pump stations and collection systems using softwares such as AutoCAD and ArcGIS. I believe that protecting the environment and making the world a better place for the future generations is one of my most important philosophy.</p>
                <p>My non-technical areas of expertise include project management, teamwork, fast adaptability, optimism and bilingual in Mandarin and English, </p>
                <p>Lastly, in my free time, I love traveling to new places, hiking, cycling and rowing, and playing video games. </p>
            </div>
            <div className="img">
                <img src = {Photo} alt="dominick" width="100%" height="650px"/>
            </div>
        </div>
    </div>
}

export default Home;