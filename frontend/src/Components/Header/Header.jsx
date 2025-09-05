import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UseOnClickOutside from "../../Hooks/UseOnClickOutside";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const linkTextClasses =
    "text-2xl font-bold font-titulo hover:text-secondary transition-colors duration-300";

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-28 bg-primary flex items-center justify-end sm:justify-center px-6 md:px-20 border-b-4 border-offwhite">
      <img
        src="/logo.svg"
        alt="logotipo da marca"
        onClick={handleClick}
        className="cursor-pointer w-auto h-14 sm:h-20 object-contain fixed sm:left-10 left-0 "
      />

      <nav className="md:block self-center ">
        <ul className="flex gap-10">
          <li>
            <NavLink
              to="/"
              className={`relative inline-block py-2 text-base md:text-2xl ${linkTextClasses}`}
            >
              {({ isActive }) => (
                <>
                  Home
                  <span
                    className={`absolute bottom-0 left-0 h-1 bg-secondary rounded-f xull transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projetos"
              className={`relative inline-block py-2 text-base md:text-2xl ${linkTextClasses}`}
            >
              {({ isActive }) => (
                <>
                  Projetos
                  <span
                    className={`absolute bottom-0 left-0 h-1 bg-secondary rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={`relative inline-block py-2 text-base md:text-2xl ${linkTextClasses}`}
            >
              {({ isActive }) => (
                <>
                  Contato
                  <span
                    className={`absolute bottom-0 left-0 h-1 bg-secondary rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
