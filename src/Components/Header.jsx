import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const linkTextClasses =
    "text-xl md:text-2xl font-bold font-titulo hover:text-secondary transition-colors duration-300";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary border-b-4 border-offwhite flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 md:px-20 py-4">
      <div className="flex justify-center sm:justify-start w-full sm:w-auto mb-4 sm:mb-0">
       <img
          src="/logo_as_studio_retangular.png"
          alt="Logotipo André Studio"
          onClick={handleClick}
          // Altura levemente reduzida (h-10/12) pois a logo retangular ocupa mais espaço horizontal
          className="cursor-pointer h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      <nav className="w-full sm:w-auto flex justify-center">
        <ul className="flex flex-row items-center gap-4 sm:gap-10">
          {["Home", "Projetos", "Contato"].map((text) => {
            const path =
              text === "Home"
                ? "/"
                : `/${text
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")}`;
            return (
              <li key={text}>
                <NavLink
                  to={path}
                  className={`relative inline-block py-2 ${linkTextClasses}`}
                >
                  {({ isActive }) => (
                    <>
                      {text}
                      <span
                        className={`absolute bottom-0 left-0 h-1 bg-secondary rounded-full transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
