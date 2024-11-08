import { challengeData } from "../../data/challengeData";
import BannerTop from "../components/BannerTop";
import Container from "../components/shared/Container";
import ShowCompDetailsInPage from "../components/ShowCompDetailsInPage";

const Challenge = () => {
  return (
    <>
      <section className="w-full">
        <BannerTop
          image={"./images/banner_images/banner-5.jpg"}
          bigHeader={
            "The Hidden Hurdles of Real Estate Investment: Why Going Solo Isn't Always Profitable"
          }
          smallHeader={
            "Explore the key challenges individual investors face in achieving high returns in real estate."
          }
        />
        <ShowCompDetailsInPage pageData={challengeData} />
        <Container>
          <p className="bg-dark_trans_purple rounded-md text-base leading-relaxed px-4 py-3 mt-2 mb-20">
            Investing in real estate by oneself involves navigating a myriad of
            challenges, from market volatility and high entry barriers to
            financing issues and regulatory complexities. Understanding these
            hurdles and being prepared for the associated risks and costs can
            help individual investors make more informed decisions and improve
            their chances of achieving successful returns.
          </p>
        </Container>
      </section>
    </>
  );
};

export default Challenge;
