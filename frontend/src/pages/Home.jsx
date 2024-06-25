import Container from "../components/Container";
import ShortDetailHouses from "../components/ShortDetailHouses";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import "../css/Home.css";
import ImageSlider from "../components/ImageSlider";
import PropertyCard from "../components/PropertyCard";
import OurTeamCard from "../components/OurTeamCard";
// import { propertyData } from "../../../data/homeData";
import About from "../components/About";
import Button from "../components/Button";
import { useGetAllPropertiesQuery } from "../redux/features/propertyApi";

const Home = () => {
  const [isShow, setIsShow] = useState(null);
  const { data } = useGetAllPropertiesQuery();

  return (
    <>
      <ImageSlider />
      <About />
      <Container>
        <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mb-16">
          {Array.isArray(data) &&
            data
              .slice(0, 6)
              .map((item) => (
                <PropertyCard key={item._id} propertyData={item} />
              ))}
        </div>
      </Container>
      <ShortDetailHouses
        contents={{
          image: "./images/home-1.jpg",
          heading: "Find Houses For Rent at Bengal Estates Limited",
          para: "Each of the homes for rent features a detailed description of the property, including the number of bedrooms and bathrooms and how many days it has been listed on our site. When searching on HomeFinder for homes to rent, each listing will also include information about the local area, including population, the unemployment rate, schools, and percentage of households with children",
        }}
        direction={""}
      />
      <Container>
        {/* Video Section */}
        <section className="flex justify-center items-center w-full sm:mb-24 min-[320px]:mb-20">
          <div className="w-full relative">
            <img
              className="w-full h-fit rounded-[20px] lg:object-cover min-[320px]:object-contain border-[0.625rem] border-dark_trans_purple overflow-hidden"
              src="/images/Thumbnail.jpg"
              alt="Video Thumbnail"
            />
            <div
              onClick={() => setIsShow(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9] sm:w-48 sm:h-48 min-[320px]:w-28 min-[320px]:h-28 rounded-full cursor-pointer"
            >
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#BFBFBF] opacity-75"></span>
              <FaPlay className="text-[#656565] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:ml-2 sm:text-8xl min-[320px]:text-5xl min-[320px]:ml-1" />
            </div>
          </div>
          <Modal isShow={isShow} setIsShow={setIsShow} />
        </section>
      </Container>
      <OurTeamCard />
      <Container>
        {/* About Section */}
        <section className="w-full flex justify-between items-center gap-10 max-lg:gap-y-8 max-sm:flex-wrap-reverse  mb-10">
          {/* <div className="max-lg:w-full w-1/2  flex flex-col justify-center lg:gap-6 max-lg:gap-4">
            <h2 className="flex-grow font-lato lg:text-5xl mb-7 lg:text-start max-lg:text-center max-lg:text-4xl">
              About Us
            </h2>
            <p className="font-inter text-lg leading-6 text-[#dadada] lg:text-start max-lg:text-center">
              {`At Bengal Estates Limited, your success is not just a goal; it's
              our unwavering commitment. We are dedicated to making the process
              of real estate investing as straightforward, profitable, and
              hassle-free as possible for you. We understand that in the world
              of passive rental investments, trust and reliability are
              paramount. That's why we've made these commitments to you`}
            </p>
          </div> */}

          <form className="w-[50%] max-sm:w-full h-[21rem] flex flex-col justify-center lg:gap-6 max-lg:gap-4">
            <input
              className="w-full px-5 py-2 rounded-lg bg-dark_trans_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="w-full px-5 py-2 rounded-lg bg-dark_trans_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
              type="email"
              name="email"
              placeholder="Email"
            />
            <textarea
              className="w-full px-5 py-2 rounded-lg bg-dark_trans_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300 resize-none"
              name="message"
              placeholder="Message"
              rows="5"
            ></textarea>
            <Button title={"send"} width={"8rem"} height={"2.4rem"} />
          </form>

          <div className="w-[50%] max-sm:w-full h-[21rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17043.237316961153!2d-81.54791834338494!3d40.962926744491455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830d7958b2efab7%3A0x29c96c95fd266d04!2sAkron%2C%20OH%2C%20USA!5e0!3m2!1sen!2sbd!4v1719254287758!5m2!1sen!2sbd"
              style={{
                border: "4px solid #B469FF",
                borderRadius: "20px",
                width: "100%",
                height: "100%",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
