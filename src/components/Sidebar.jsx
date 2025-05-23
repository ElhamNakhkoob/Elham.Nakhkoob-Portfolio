import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Foto from "../assets/images/Foto.png";
import GithubIcon from "../assets/images/github(1).png";
import LinkedinIcon from "../assets/images/linkedin.png";
import XingIcon from "../assets/images/xing.png";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="bg-[#434343] text-white w-full md:w-64 md:h-screen p-4 fixed md:static z-50">
      <div className="flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold">Elham Nakhkoob</h1>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar content */}
      <div className={`mt-4 md:mt-0 ${menuOpen ? "block" : "hidden"} md:block`}>
        <div className="flex flex-col items-center mb-4">
          <img
            src={Foto}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-lg mb-2 mt-3"
          />
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center hidden md:block">
          Elham Nakhkoob
        </h1>

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
            <img
              src={XingIcon}
              alt="Xing"
              className="w-8 h-8 hover:opacity-80"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-2">
          {[
            { to: "/", label: "Home", exact: true },
            { to: "/about", label: "About Me" },
            { to: "/resume", label: "Resume" },
            { to: "/skils", label: "skils" },
            { to: "/projects", label: "Projects" },
            { to: "/contact", label: "Contact Me" },
          ].map(({ to, label, exact }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={exact}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
                onClick={() => setMenuOpen(false)} // auto-close on mobile
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
