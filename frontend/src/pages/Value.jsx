import { valueData1 } from "../../data/valueData";
import BannerTop from "../components/BannerTop";
import Container from "../components/Container";
import "../css/HomeGallerySlide.css";
import {
  BigRectangleCard,
  RectangleAllCardWrapper,
  RectangleCard,
  RectangleCardWrapper,
} from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Value = () => {
  const images1 = [
    "Property Search and financial analysis",
    "Investment sourcing",
    "Present to investors and justify the rationale",
    "Acquisition and staging for rental",
    "Year end financial and profit sharing",
    "Property Search and financial analysis",
    "Investment sourcing",
    "Present to investors and justify the rationale",
    "Acquisition and staging for rental",
    "Year end financial and profit sharing",
    "Property Search and financial analysis",
    "Investment sourcing",
  ];
  const images2 = [
    "Sell to outside investors",
    "Investors sourced by Bengal Estates",
    "Acquisition by Bengal Estates",
    "Liquidation based on strategy",
    "Liquidation by unanimous decision by investors",
    "Sell to outside investors",
    "Investors sourced by Bengal Estates",
    "Acquisition by Bengal Estates",
    "Liquidation based on strategy",
    "Liquidation by unanimous decision by investors",
    "Sell to outside investors",
    "Investors sourced by Bengal Estates",
  ];

  const topRectangle = useRef();

  useGSAP(() => {
    gsap.fromTo(
      topRectangle.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: topRectangle.current,
          start: "top 80%",
          end: "bottom 100%",
          scrub: 1,
        },
      }
    );
  });

  return (
    <>
      <BannerTop
        image={"./images/understand-banner.jpg"}
        bigHeader={"Benefit Outweigh Sharing Profit With Bengal Estates"}
        smallHeader={
          "Investing With Bengal Estates, You Will Get Unparallel Time Savings And Professional Service Without Any Headache"
        }
      />
      <Container>
        <div className="mb-20">
          <div
            ref={topRectangle}
            className="flex justify-between items-start max-sm:flex-wrap gap-5 mb-5"
          >
            <div className="w-1/2 bg-medium_dark_purple max-sm:flex-grow px-14 py-14 rounded-lg">
              <h3 className="font-lato text-4xl mb-6">
                Time savings and avoid anxiety
              </h3>
              <p className="font-inter text-base">
                Potential time savings when you invest with Bengal Estates are
                presented in hours in pi-chart by different types of activities
                involved with a successful and profitable real estate
                investment.
              </p>
            </div>
            <div className="w-1/2 max-sm:flex-grow font-inter flex flex-col gap-4">
              {valueData1.map((item) => (
                <p
                  key={item.id}
                  className="bg-medium_dark_purple px-9 text-center py-3 rounded-lg"
                >
                  {item.paragraph}
                </p>
              ))}
            </div>
          </div>
          <RectangleAllCardWrapper>
            <RectangleCardWrapper>
              <RectangleCard
                paragraph={
                  "Your credit history will not be impacted by mortgage or adding to DTI ratio"
                }
              />
              <RectangleCard
                paragraph={
                  "Effective property management with economical but reliable handyman"
                }
              />
            </RectangleCardWrapper>
            <RectangleCardWrapper>
              <RectangleCard
                paragraph={
                  "Execute other innovative investment options more strategically to maximize your investment"
                }
              />
              <RectangleCard
                paragraph={
                  "Strategic refinancing and exploiting your equity in a best possible way"
                }
              />
            </RectangleCardWrapper>
          </RectangleAllCardWrapper>
        </div>
        <div className="text-center">
          <h2 className="font-lato text-5xl mb-6">Once You Make Investment</h2>
          <p className="font-inter text-xl mb-20">
            Imission For Bengal Estates Is To Enable You To Make The Right
            Investment Yet Hassle Free And Enjoy Long Term Wealth
          </p>
        </div>
      </Container>
      <section className="homeGallerySlides">
        <ul className="tag-list scroller__inner">
          {images1.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-medium_dark_purple h-[11rem] flex justify-center items-center text-center px-6 rounded-xl"
              >
                <h3 className="font-lato text-2xl">{item}</h3>
              </li>
            );
          })}
        </ul>
      </section>
      <Container>
        <RectangleAllCardWrapper>
          <RectangleCardWrapper>
            <RectangleCard
              paragraph={
                "Bengal Estates will organize periodic review to update on investment status"
              }
            />
            <RectangleCard
              paragraph={
                "Year end tax return will be done by Bengal Estates and your schedule k will be sent by March 15 of each year"
              }
            />
          </RectangleCardWrapper>
          <RectangleCardWrapper>
            <RectangleCard
              paragraph={
                "You can decide whether you want to receive cash flow at the year end or reinvest"
              }
            />
            <RectangleCard
              paragraph={
                "Bengal Estates will strategically reinvest your return for maximizing your profit"
              }
            />
          </RectangleCardWrapper>
        </RectangleAllCardWrapper>
        <div className="text-center mb-20">
          <h2 className="font-lato text-5xl mb-6">Exit Strategy</h2>
        </div>
        <div className="flex justify-between items-start max-sm:flex-wrap gap-5 mb-5">
          <BigRectangleCard
            header={"Initial Investment Period"}
            paragraph={
              "Initial investment need to be made for a minimum of 3 years. Once the minimum period is passed, it can be sold to outside investors"
            }
          />
          <BigRectangleCard
            header={"Exit With Capital Gain"}
            paragraph={
              "If lucrative opportunities are presented, Bengal Estates will keep the right to sell the property with justified capital gain and distribute among investors"
            }
          />
        </div>
      </Container>
      <div className="mt-20">
        <section className="homeGallerySlides">
          <ul className="tag-list scroller__inner">
            {images2.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-medium_dark_purple h-[11rem] flex justify-center items-center text-center px-6 rounded-xl"
                >
                  <h3 className="font-lato text-2xl">{item}</h3>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Value;
