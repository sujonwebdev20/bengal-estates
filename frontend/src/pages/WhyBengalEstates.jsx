import {
  whyBengalEstatesData1,
  whyBengalEstatesData2,
  whyBengalEstatesData3,
} from "../../data/whyBengalEstatesData";
import BannerTop from "../components/BannerTop";
import ShortDetailHouses from "../components/ShortDetailHouses";

const WhyBengalEstates = () => {
  return (
    <>
      <section className="w-full">
        <BannerTop
          image={"/images//invest-top-banner.jpg"}
          bigHeader={"Why Partner With Bengal Estates"}
          paragraph={
            "Pooled investment in real estate unlocks the opportunity for investors to access the property market without the financial constraints of requiring substantial capital upfront. This means that even early-stage investors with limited funds can enter the real estate arena by contributing smaller amounts to a collective pool of resources. By pooling their investments, individuals can diversify across multiple properties, spreading risk and avoiding overexposure to any single asset. This diversification strategy is akin to not putting all eggs in one basket, offering a more balanced and resilient investment portfolio. Additionally, pooled investments often benefit from professional management expertise, which can lead to more efficient operations, higher-quality properties, and potentially greater returns on investment over time."
          }
        />
        {whyBengalEstatesData1.map((item) => (
          <ShortDetailHouses key={item.id} contents={item} />
        ))}

        <img
          className="w-full h-[30rem] object-cover mb-20"
          src="/images/partner-banner.png"
          alt="Banner"
        />
        {whyBengalEstatesData2.map((item) => (
          <ShortDetailHouses key={item.id} contents={item} />
        ))}
        <div className="w-full  bg-medium_dark_purple py-10">
          <h1 className="max-w-6xl mx-auto font-lato text-[4vw] text-center font-semibold">
            Proven Experience Maximizing Return On Investment
          </h1>
        </div>
        {whyBengalEstatesData3.map((item) => (
          <ShortDetailHouses key={item.id} contents={item} />
        ))}
      </section>
    </>
  );
};

export default WhyBengalEstates;
