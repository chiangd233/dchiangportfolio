import {React} from "react";
import "../styles/Footer.css";
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

function Footer() {
    return <div className="footer">
        <div className="socialMedia">
        <a href="https://www.linkedin.com/in/dominick-chiang-e-i-t-30751182/" target="_blank" rel="noreferrer">
            <FaLinkedin />
        </a>
        <FaGithub />
        <MdEmail />
        </div>
        <p>&copy; 2022 Dominick Chiang</p>
    </div>
}

export default Footer;