import React, {useState} from "react";
import { useEffect } from "react";
import {Link, useLocation} from "react-router-dom"
import "../styles/Navbar.css";
import ReorderIcon from "../assets/reorder.png"


function Header() {
    const [expandHeader, setExpandHeader] = useState(false);
    const Location = useLocation();

    useEffect(() => {
        setExpandHeader(false);
    }, [Location])

    return <div className = "navbar" id={expandHeader ? "open": "close"}>
        <div className = "toggleButton">
            <button 
                onClick={()=> {
                    setExpandHeader((prev) => !prev)
                }}
            >  
            <img width="50px" hieght="50px" src ={ReorderIcon} alt= "reorder" />
            </button>
        </div>
        <div className = "links">
            <Link to="/dchiangportfolio/"> Home </Link>
            <Link to="/dchiangportfolio/projects"> Projects </Link>
            <Link to="/dchiangportfolio/experience"> Experience </Link>
        </div>
    </div>
}

export default Header;