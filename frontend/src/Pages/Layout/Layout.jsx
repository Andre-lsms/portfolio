import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Header /> {/* Altura fixa definida via Tailwind ou na própria tag */}
      <main className="flex-1 bg-secondary w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
