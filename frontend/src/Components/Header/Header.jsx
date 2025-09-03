import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UseOnClickOutside from "../../Hooks/UseOnClickOutside";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const headerRef = useRef(null);

  UseOnClickOutside(headerRef, () => setMenuOpen(false));

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const linkTextClasses =
    "text-2xl font-bold font-titulo hover:text-secondary transition-colors duration-300";
  const mobileLinkTextClasses =
    "text-lg font-bold font-titulo text-white hover:text-secondary transition-colors duration-300";

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 h-28 bg-primary flex items-center justify-between px-6 md:px-20"
    >
      <img
        src="/logo.svg"
        alt="logotipo da marca"
        onClick={handleClick}
        className="cursor-pointer h-full"
      />

      <nav className="hidden md:block">
        <ul className="flex gap-10">
          <li>
            <NavLink
              to="/"
              className={`relative inline-block py-2 ${linkTextClasses}`}
            >
              {({ isActive }) => (
                <>
                  Home
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
              to="/projetos"
              className={`relative inline-block py-2 ${linkTextClasses}`}
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
              className={`relative inline-block py-2 ${linkTextClasses}`}
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

      <button
        className="md:hidden text-offwhite text-3xl bg-transparent"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-primary px-6 py-4 md:hidden z-50 border-b-2 border-offwhite">
          {/* AQUI ESTÁ A MUDANÇA: Adicione o onClick na <ul> */}
          <ul
            onClick={() => setMenuOpen(false)}
            className="flex flex-col gap-4 text-sm font-sans items-center"
          >
            <li>
              <NavLink
                to="/"
                className={`relative inline-block py-1 ${mobileLinkTextClasses}`}
              >
                {({ isActive }) => (
                  <>
                    Home
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ${
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
                className={`relative inline-block py-1 ${mobileLinkTextClasses}`}
              >
                {({ isActive }) => (
                  <>
                    Projetos
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ${
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
                className={`relative inline-block py-1 ${mobileLinkTextClasses}`}
              >
                {({ isActive }) => (
                  <>
                    Contato
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
