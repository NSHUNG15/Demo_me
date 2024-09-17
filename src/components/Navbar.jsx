import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
const Navbar = () => {
  return <nav className="flex items-center justify-between py-6 mb-20 ">
    <div className="flex items-center flex-shrink-0">
        <img className="w-10 mx-2" src={logo} alt="logo"/>
    </div>
    <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaFacebook/>
    </div>
    </nav>

  
}

export default Navbar;
