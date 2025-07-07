import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // rota para onde você quer ir
  };

  return (
    <header className="w-full h-28 bg-primary flex items-center justify-between px-6 md:px-20">
      <img
        src="/logo.webp"
        alt="logotipo da marca"
        onClick={handleClick}
        className=" cursor-pointer h-14"
      />

      <nav className="hidden md:block">
        <ul className="flex gap-10 text-white text-lg">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projetos">Projetos</a>
          </li>
          <li>
            <a href="/servicos">Serviços</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </nav>

      <button
        className="md:hidden  text-offwhite text-3xl bg-transparent"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-primary px-6 py-4 md:hidden z-50">
          <ul className="flex flex-col gap-4 text-white text-lg items-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projetos">Projetos</a>
            </li>
            <li>
              <a href="/servicos">Serviços</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
