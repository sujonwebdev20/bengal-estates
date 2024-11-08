import {
  aboutDataBoxSection1,
  aboutDataBoxSection2,
} from "../../../data/aboutData";
import ShortDetailHouses from "../ShortDetailHouses";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section className="mx-auto">
      <h2 className="text-center text-5xl max-sm:text-4xl font-lato mb-16">
        About Bengal Estates
      </h2>
      <ShortDetailHouses
        contents={{
          image: "/images/home_images/home-1.jpg",
          paragraph:
            "Welcome to Bengal Estates, where we redefine real estate investment to make it accessible, profitable, and hassle-free for investors of all experience and involvement levels. Whether you are a seasoned investor or just starting out, Bengal Estates is your trusted partner in navigating the complex world of real estate.",
          direction: "row-reverse",
        }}
      />
      <h2 className="text-center text-5xl max-sm:text-4xl font-lato mb-16">
        What We Do
      </h2>
      <div className="max-w-[1440px] w-full flex justify-center mb-20 max-lg:px-3">
        <div className="w-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center gap-5">
          {aboutDataBoxSection1.map((item) => {
            return <AboutCard key={item.id} contents={item} />;
          })}
        </div>
      </div>
      <h2 className="text-center text-5xl max-sm:text-4xl font-lato mb-16">
        Why Invest with Bengal Estates?
      </h2>
      <div className="max-w-[1440px] w-full flex justify-center mb-20 max-lg:px-3">
        <div className="w-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center gap-5">
          {aboutDataBoxSection2.map((item) => {
            return <AboutCard key={item.id} contents={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
