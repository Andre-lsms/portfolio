import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
      <Header /> {/* Altura fixa definida via Tailwind ou na própria tag */}
      <main className="flex-1 bg-blue-600 w-full">
        <Outlet />
      </main>
      <Footer /> {/* Altura fixa definida via Tailwind ou na própria tag */}
    </div>
  );
};

export default Layout;
