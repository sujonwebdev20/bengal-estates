import Container from "./Container";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t-[3px] border-light_purple pb-2 mt-auto">
      <Container>
        <div className="w-full flex max-md:flex-col lg:px-0 lg:gap-20 min-[320px]:gap-10 pt-3 pb-3 justify-between items-start max-md:items-center text-[#dadada] min-[320px]:px-5">
          <div className=" flex-grow ">
            <div className="max-lg:flex justify-center mb-3 mt-5">
              <img className="w-24" src="/images/logo.webp" alt="Brand" />
            </div>
            <p className="font-inter text-base lg:text-start min-[320px]:text-center">
              Our mission is to find a quality rental solution you are looking
              for within your budget
            </p>
          </div>

          <div className="flex-grow">
            <h3 className="font-lato text-3xl text-light_purple lg:text:start max-lg:text-center mb-3 mt-5 text-nowrap">
              Join Our Social Media
            </h3>
            <ul className="list-none flex lg:justify-start lg:items-center max-lg:justify-center gap-7 text-3xl text-light_purple my-4">
              <li>
                <Link to="#">
                  <TiSocialTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.facebook.com/profile.php?id=61556253734318"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-grow">
            <h3 className="font-lato text-3xl text-light_purple mb-3 mt-5 lg:text:start max-lg:text-center">
              Contact Info
            </h3>
            <p className="font-inter text-base lg:text-start max-lg:text-center flex lg:flex-col lg:items-start max-lg:flex-col max-lg:items-center">
              Wooster, OH P.O. Box 74 • Smithville, Ohio-44677 <br />
              330-786-6766 info@greenabodeprop.com
            </p>
          </div>
        </div>
        <p className="font-inter text-center text-[#dadada] my-5">
          © 2024 All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
