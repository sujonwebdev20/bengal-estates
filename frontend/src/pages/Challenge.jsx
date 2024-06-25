import { challengeData } from "../../data/challengeData";
import BannerTop from "../components/BannerTop";
import ShortDetailHouses from "../components/ShortDetailHouses";

const Challenge = () => {
  return (
    <>
      <section className="w-full">
        <BannerTop image={"/images/understand-banner.jpg"} isOpacity={false} />
        {challengeData.map((item) => (
          <ShortDetailHouses key={item.id} contents={item} />
        ))}

        <img
          className="w-full h-[37vw] max-lg:h-[45vw] object-cover mb-20"
          src="/images/short-detail-houses-img-4.jpg"
          alt="Banner-2"
        />
      </section>
    </>
  );
};

export default Challenge;
