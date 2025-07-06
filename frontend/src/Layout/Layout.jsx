import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-w-[400px] min-h-screen w-screen">
      <Header />
      <main className="bg-secondary w-full flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
