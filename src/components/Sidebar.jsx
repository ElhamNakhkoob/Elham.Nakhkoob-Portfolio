import { NavLink } from "react-router-dom";
import Foto from "../assets/images/Foto.png";
import GithubIcon from "../assets/images/github(1).png";
import LinkedinIcon from "../assets/images/linkedin.png";
import XingIcon from "../assets/images/xing.png";

export default function Sidebar() {
  return (
    <nav
      className="
  bg-[#434343] text-white p-4
  w-full           
  md:w-64          
  h-auto         
  md:h-screen      
  flex-shrink-0
  fixed md:static
  top-0 left-0 z-50
"
    >
      <div className="flex flex-col items-center mb-4">
        <img
          src={Foto}
          alt="Profile"
          className="w-50 h-50 rounded-full object-cover shadow-lg mb-2 mt-3"
        />
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center">Elham Nakhkoob</h1>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GithubIcon}
            alt="GitHub"
            className="w-8 h-8 hover:opacity-80"
          />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedinIcon}
            alt="LinkedIn"
            className="w-8 h-8 hover:opacity-80"
          />
        </a>
        <a
          href="https://www.xing.com/profile/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={XingIcon} alt="Xing" className="w-8 h-8 hover:opacity-80" />
        </a>
      </div>

      <ul className="space-y-4">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skils"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            skils
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
