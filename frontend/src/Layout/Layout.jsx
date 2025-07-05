import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-w-screen min-h-screen w-screen">
      <Header />
      <main className=" w-full flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
