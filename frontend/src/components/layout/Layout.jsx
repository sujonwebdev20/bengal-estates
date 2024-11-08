import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import TopBar from "../../components/TopBar";
import ErrorBoundary from "../../ErrorBoundary";
import Navbar from "../navbar-menu/Navbar";

const Layout = () => {
  return (
    <>
      <ErrorBoundary>
        <TopBar />
        <Navbar />
        <Outlet />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default Layout;
