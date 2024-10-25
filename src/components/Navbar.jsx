import logo from "../assets/CeritaDimasLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-8 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center pl-8 lg:pl-12">
        <img className="w-16 lg:w-16" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a 
          href="https://linkedin.com/in/dimasrizkyyy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-blue-500"
        >
        <FaLinkedin />
        </a>
        <a 
          href="https://github.com/Dimasrzky" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-gray-600"
          >
        <FaGithub />
        </a>
        <a 
          href="https://instagram.com/dimasrzky_dr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-pink-500"
        >
        <FaInstagram />
        </a>
        <a 
          href="https://twitter.com/Dimasrizky08_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-blue-400"
        >
        <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
