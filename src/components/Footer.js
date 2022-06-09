import {React} from "react";
import "../styles/Footer.css";
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

function Footer() {
    return <div className="footer">
        <div className="socialMedia">
        <FaLinkedin />
        <FaGithub />
        <MdEmail />
        </div>
        <p>&copy; 2022 Dominick Chiang</p>
    </div>
}

export default Footer;