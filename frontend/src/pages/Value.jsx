import BannerTop from "../components/BannerTop";
// import "../css/HomeGallerySlide.css";
import { valueData } from "../../data/valueData";
import ShowCompDetailsInPage from "../components/ShowCompDetailsInPage";

const Value = () => {
  return (
    <>
      <BannerTop
        image={"./images/banner_images/banner-5.jpg"}
        bigHeader={"Unlock Exceptional Real Estate Returns with Bengal Estates"}
        smallHeader={
          "Discover how sharing 20% ownership can bring you unparalleled benefits and maximize your investment potential."
        }
      />
      <ShowCompDetailsInPage pageData={valueData} />
    </>
  );
};

export default Value;
