import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className=" bg-secondary w-full pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
