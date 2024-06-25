import BannerTop from "../components/BannerTop";
import ShortDetailHouses from "../components/ShortDetailHouses";
import BannerBottom from "../components/BannerBottom";
import { overviewData1, overviewData2 } from "../../data/overviewData";

const Overview = () => {
  return (
    <>
      <BannerTop
        image={"./images/invest-top-banner.jpg"}
        bigHeader={"Invest in Real Estate"}
        smallHeader={"Build the future you want"}
        paragraph={
          "Access quality investments opportunities at your fingertip from anywhere in the world"
        }
      />
      {overviewData1.map((item) => (
        <ShortDetailHouses key={item.id} contents={item} />
      ))}
      <BannerBottom
        image={"./images/invest-bottom-banner.jpg"}
        header={
          "You deserve more than just a property management or investment platform"
        }
      />
      {overviewData2.map((item) => (
        <ShortDetailHouses key={item.id} contents={item} />
      ))}
    </>
  );
};

export default Overview;
