import { whyBengalEstatesData } from "../../data/whyBengalEstatesData";
import BannerTop from "../components/BannerTop";
import ShowCompDetailsInPage from "../components/ShowCompDetailsInPage";

const WhyBengalEstates = () => {
  return (
    <>
      <section className="w-full">
        <BannerTop
          image={"/images/banner_images/why-bengal-estates-banner.jpg"}
          bigHeader={"Unlock Your Real Estate Potential with Bengal Estates"}
          smallHeader={
            "Experience hassle-free and profitable real estate investments with the expertise and support you"
          }
        />
        <ShowCompDetailsInPage pageData={whyBengalEstatesData} />
      </section>
    </>
  );
};

export default WhyBengalEstates;
