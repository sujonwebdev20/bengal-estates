import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "../css/Navbar.css";
import { useContext } from "react";
import DropDownMenu from "./DropDownMenu";
import scrollToTop from "../../utils/scrollToTop";
import { MobileNavbarContext } from "../../contexts/MobileNavbarContext";
import MobileNavbar from "./MobileNavbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [mobileNavActive, setMobileNavActive] = useContext(MobileNavbarContext);

  const { token } = useSelector((state) => state.auth);

  let decodedToken = null;
  if (token) {
    const jwtToken = jwtDecode(token);
    decodedToken = jwtToken;
  }

  if (mobileNavActive) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  const headerRef = useRef();

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
              onClick={scrollToTop}
              className="w-24"
              src="/images/logo.webp"
              alt="Brand"
            />
          </Link>
          {!mobileNavActive ? (
            <nav className="max-lg:hidden">
              <ul className="inner_nav flex lg:gap-10 uppercase">
                <li>
                  <NavLink
                    style={handleActiveLink}
                    to="/"
                    className="text-base"
                  >
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={handleActiveLink}
                    to="/property/all"
                    className="text-base"
                  >
                    property
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={handleActiveLink}
                    to="/blog/all"
                    className="text-base"
                  >
                    blog
                  </NavLink>
                </li>
                {token && decodedToken.role === "admin" && (
                  <li>
                    <NavLink
                      style={handleActiveLink}
                      to="/admin"
                      className="text-base"
                    >
                      admin
                    </NavLink>
                  </li>
                )}
                <li className="drop_down  cursor-pointer">
                  investor <DropDownMenu />
                </li>
                <li>
                  <NavLink
                    style={handleActiveLink}
                    to="/tenant_portal"
                    className="text-base"
                  >
                    tenant portal
                  </NavLink>
                </li>
              </ul>
            </nav>
          ) : (
            <MobileNavbar />
          )}
          <FiMenu
            onClick={() => setMobileNavActive(!mobileNavActive)}
            className="hidden max-lg:block text-5xl text-light_purple"
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
