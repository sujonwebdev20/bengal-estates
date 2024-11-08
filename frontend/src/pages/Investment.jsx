import { investmentData } from "../../data/investmentData";
import BannerTop from "../components/BannerTop";
import ShortDetailHouses from "../components/ShortDetailHouses";
import BannerBottom from "../components/BannerBottom";

const Investment = () => {
  return (
    <>
      <BannerTop
        image={"./images/banner_images/investment-banner-1.jpg"}
        bigHeader={"Types of Real Estate Investments"}
        smallHeader={"Which One Is Right For You"}
        isBgCenter={false}
      />
      <section className="w-full">
        {investmentData.map((item) => (
          <ShortDetailHouses key={item.id} contents={item} />
        ))}

        <BannerBottom
          image={"./images/banner_images/investment-banner-2.jpg"}
          isOpacity={true}
        />
      </section>
    </>
  );
};

export default Investment;
