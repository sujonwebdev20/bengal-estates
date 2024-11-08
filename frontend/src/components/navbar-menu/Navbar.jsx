import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import "../../css/Navbar.css";
import DropDownMenu from "./DropDownMenu";
import MobileNavbar from "./MobileNavbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import ScrollToTop from "../ScrollToTop";
import { configurePath } from "./configurePath";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const headerRef = useRef();

  let decodedToken = null;
  if (token) {
    const jwtToken = jwtDecode(token);
    decodedToken = jwtToken;
  }

  if (isMobileNavActive) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  useGSAP(() => {
    gsap.to(headerRef.current, {
      y: 0,
      position: "fixed",
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });

  const mobileHamburgerHandler = (isShowMenu) => {
    setIsMobileNavActive(isShowMenu);
  };

  const handleActiveLink = ({ isActive }) => {
    return {
      color: isActive && "#b469ff",
    };
  };

  return (
    <>
      <header
        ref={headerRef}
        className="navbar_container w-full px-0 max-[1180px]:px-4 z-[50] bg-dark_purple"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center overflow-hidden py-4">
          <Link to="/">
            <img
              onClick={ScrollToTop}
              className="w-24"
              src="/images/logo.webp"
              alt="Brand"
            />
          </Link>

          <nav className="max-lg:hidden">
            <ul className="inner_nav flex lg:gap-10 capitalize">
              {configurePath.map((configure, index) => (
                <li key={index}>
                  <NavLink
                    style={handleActiveLink}
                    to={configure.path}
                    className="text-base tracking-wider"
                  >
                    {configure.label}
                  </NavLink>
                </li>
              ))}
              <li className="drop_down cursor-pointer tracking-wider">
                <span className="flex items-center gap-1">
                  investor
                  <IoIosArrowDown />
                </span>
                <DropDownMenu />
              </li>
              {token && decodedToken.role === "admin" && (
                <li>
                  <NavLink
                    style={handleActiveLink}
                    to="/admin"
                    className="text-base tracking-wider"
                  >
                    admin
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>

          {isMobileNavActive && (
            <MobileNavbar
              mobileHamburgerHandler={mobileHamburgerHandler}
              isMobileNavActive={isMobileNavActive}
            />
          )}

          <FiMenu
            onClick={() => setIsMobileNavActive(true)}
            className="hidden max-lg:block text-5xl text-light_purple"
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
