function Header() {
  return (
    <header className=" h-28 bg-primary flex items-center ">
      <img src="/logo.svg" alt="logotipo da marca" className="h-[60px] px-10" />
      <nav className="">
        <ul className="flex gap-10">
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
            <a href="/sobre">Sobre</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
