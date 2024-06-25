import { aboutData1, aboutData2 } from "../../../data/aboutData";
import { BannerTop, ShortDetailHouses } from "../../components";
import BannerBottom from "../../components/BannerBottom/BannerBottom";
import Container from "../../components/Container/Container";

const About = () => {
  return (
    <>
      <BannerTop
        image={"./images/about-section-top-banner.jpg"}
        bigHeader={"Your Partner In Passive Investments"}
        paragraph={
          "Welcome to Bengal Estates Limited, your trusted partner for passive rental investments. We believe real estate wealth can be achieved without constant hands- on involvement. Our mission is to empower investors like you to attain financial security and success through passive income."
        }
      />
      <h2 className="w-[45%] max-lg:w-[80%] mx-auto font-lato text-[4.3vw] max-lg:text-[6vw] max-sm:text-[9vw] text-center leading-tight">
        Why Choose Rental Investments
      </h2>
      {aboutData1.map((item) => (
        <ShortDetailHouses key={item.id} contents={item} />
      ))}

      <h2 className="w-full mx-auto font-lato text-[4.3vw] max-lg:text-[6vw] max-sm:text-[9vw] text-center leading-tight mb-6">
        Our Commitment - Your Success
      </h2>
      <BannerBottom
        image={"./images/short-detail-houses-img-4.jpg"}
        header={"Build Long Term Wealth With Bengal Estates Limited"}
      />
      {aboutData2.map((item) => (
        <ShortDetailHouses key={item.id} contents={item} />
      ))}
      <div className="text-center bg-medium_dark_purple py-9 mb-20">
        <Container>
          <p className="mb-6 font-inter text-base">
            {` When you choose Bengal Estates Limited, you're not just choosing a
            partner in real estate; you're choosing a partner in your journey to
            financial prosperity. Your dreams, your success, and your peace of
            mind are at the heart of everything we do. Let's embark on this path
            to financial freedom together. Contact us today, and let's get
            started. Your success story begins here.`}
          </p>
          <h3 className="font-lato text-4xl">
            Become Investment Partner & Enjoy hassle free passive income
          </h3>
        </Container>
      </div>
    </>
  );
};

export default About;
