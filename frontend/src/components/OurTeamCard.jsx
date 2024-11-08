import { ourTeamData } from "../../data/ourTeamData";
import Container from "./Container";
import "../css/OurTeam.css";

const OurTeamCard = () => {
  return (
    <section className="mb-20 w-full">
      <div className=" overflow-hidden">
        <h2 className="text-center font-lato text-5xl mb-24">Our Team</h2>
        {/* <div className="team__scroller">
          {ourTeamData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[30rem] max-sm:w-[20rem] h-[18rem] shrink-0 mb-3 relative rounded-2xl px-4  py-6 bg-dark_trans_purple"
                data-twe-perfect-scrollbar-init=""
              >
                <div className="mb-3 w-16 h-16 absolute -top-5 right-7 border-light_purple rounded-full">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src={item.image}
                    alt="Home"
                  />
                </div>

                <div className="w-full h-full pt-5 overflow-hidden">
                  <h2 className="text-2xl font-lato font-bold mb-3">
                    {item.name}
                  </h2>
                  <div className="scrollbar w-full h-full pt-5 overflow-y-auto">
                    <p className="font-inter font-light leading-6">
                      {item.manDetails}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
        <Container>
          <div className="our_team_slider lg:mb-20 min-[320px]:mb-[3rem]">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 w-full">
              {ourTeamData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[100%] h-[20rem] border-2  border-transparent hover:border-light_purple hover:scale-105 transition-all shrink-0 rounded-2xl px-4  py-6 bg-dark_trans_purple overflow-hidden"
                    data-twe-perfect-scrollbar-init=""
                  >
                    <div className="mb-5 w-full h-16 border-light_purple rounded-full flex justify-between items-center">
                      <h2 className="text-2xl font-lato font-bold">
                        {item.name}
                      </h2>
                      <img
                        className="w-20 h-20 max-sm:w-16 max-sm:h-16 rounded-full object-cover"
                        src={item.image}
                        alt="Home"
                      />
                    </div>

                    <div className="w-full h-full">
                      <div className="scrollbar w-full h-[calc(100%-7rem)] pt-5 overflow-y-auto">
                        <p className="font-inter font-light leading-6">
                          {item.manDetails}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* {slidingImages.map((item, index) => (
              <SwiperSlide key={index + 1}>
                <img src={item} alt="Home Property" />
              </SwiperSlide>
            ))} */}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default OurTeamCard;
