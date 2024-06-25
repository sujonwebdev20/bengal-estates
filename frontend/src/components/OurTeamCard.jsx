import "../css/OurTeamCard.css";

const OurTeamCard = () => {
  const teamCard = [
    {
      image: "/images/ourTeamImages/AKM Arafat Ahmed.jpg",
      name: "AKM Arafat Ahmed",
      manDetails:
        "Our co-founder, AKM Arafat Ahmed, brings a unique blend of expertise and passion to the real estate industry. As a professional electrical engineer and a seasoned Michigan State real estate agent, Arafat combines technical acumen with deep market knowledge to build a robust portfolio of real estate assets. Being a realtor himself, he has an insider's understanding of the market, enabling him to uncover exclusive deals that aren't accessible through public information. Driven by a commitment to grow his own real estate wealth and empower others on their investment journeys, Arafat leverages his extensive experience to help clients achieve their financial goals through strategic real estate investments. Join us at Bengal Estates Limited, where Arafat Ahmed's vision and dedication are the cornerstones of our mission to create lasting value in the real estate market.",
    },
    {
      image: "/images/ourTeamImages/Abdullah Al Loman.jpg",
      name: "Abdullah Al Loman",
      manDetails:
        "Our co-founder, Abdullah Al Loman, is a biotechnology professional and a licensed real estate agent in North Carolina, bringing unparalleled expertise across every category of the real estate business. With extensive experience in growing real estate wealth in any market and economic environment, Abdullah always finds the best ways to achieve the highest returns on your investments. His background in long-term and short-term rental investments and commercial lending has enabled him to build strong relationships with lenders nationwide, securing complex loan structures that keep investors free from the intricacies of financing. Additionally, Abdullah's expertise in finance and business development drives Bengal Estates to effectively grow your wealth. Join us at Bengal Estates Limited, where Abdullah Al Loman's comprehensive knowledge and dedication are the cornerstones of our mission to create lasting value in the real estate market.",
    },
    {
      image: "/images/ourTeamImages/S M Mahfuzul Islam.jpg",
      name: "S M Mahfuzul islam",
      manDetails:
        "Our co-founder, S M Mahfuzul Islam, is a chemical engineer by profession with a profound passion for the real estate industry. Known for his exceptional ability to manage multiple real estate projects simultaneously, Mahfuzul excels in ensuring each project performs at its best. His strategic approach and meticulous attention to detail bring out the maximum value in every investment, regardless of the complexity or number of projects he oversees. Mahfuzul's expertise lies in steering the course of real estate investments with unwavering focus, ensuring that every project achieves its highest potential. His adept management skills ensure that investors receive the best possible returns, even when multiple projects are in play. At Bengal Estates Limited, S M Mahfuzul Islam’s dedication and unique talents are fundamental to our mission of delivering exceptional value and growth in the real estate market. Join us and experience how Mahfuzul’s visionary leadership can turn your real estate investments into thriving successes.",
    },
    {
      image: "/images/ourTeamImages/Mir Shahnewaz Arefin.jpg",
      name: "Mir Shahnewaz arefin",
      manDetails:
        "Our co-founder, Mir Shahnewaz Arefin, is a civil engineer by profession with a robust background in structural engineering. His professional expertise uniquely positions him to maximize the value of both residential and commercial real estate investments. Mir's keen understanding of value addition ensures that each property reaches its highest potential, offering advantages that general investors might miss. With a visionary approach and unwavering passion, Mir prioritizes our investors, ensuring they receive the utmost attention and dedication. He meticulously oversees every aspect of the company, keeping all elements under one umbrella to guarantee that no detail is overlooked, making each project a resounding success. At Bengal Estates Limited, Mir Shahnewaz Arefin's commitment and comprehensive knowledge are the pillars of our mission to provide exceptional value and growth in the real estate market. Join us and experience how Mir’s strategic leadership and dedication can elevate your real estate investments to new heights.",
    },
    {
      image: "/images/ourTeamImages/AKM Arafat Ahmed.jpg",
      name: "AKM Arafat Ahmed",
      manDetails:
        "Our co-founder, AKM Arafat Ahmed, brings a unique blend of expertise and passion to the real estate industry. As a professional electrical engineer and a seasoned Michigan State real estate agent, Arafat combines technical acumen with deep market knowledge to build a robust portfolio of real estate assets. Being a realtor himself, he has an insider's understanding of the market, enabling him to uncover exclusive deals that aren't accessible through public information. Driven by a commitment to grow his own real estate wealth and empower others on their investment journeys, Arafat leverages his extensive experience to help clients achieve their financial goals through strategic real estate investments. Join us at Bengal Estates Limited, where Arafat Ahmed's vision and dedication are the cornerstones of our mission to create lasting value in the real estate market.",
    },
    {
      image: "/images/ourTeamImages/Abdullah Al Loman.jpg",
      name: "Abdullah Al Loman",
      manDetails:
        "Our co-founder, Abdullah Al Loman, is a biotechnology professional and a licensed real estate agent in North Carolina, bringing unparalleled expertise across every category of the real estate business. With extensive experience in growing real estate wealth in any market and economic environment, Abdullah always finds the best ways to achieve the highest returns on your investments. His background in long-term and short-term rental investments and commercial lending has enabled him to build strong relationships with lenders nationwide, securing complex loan structures that keep investors free from the intricacies of financing. Additionally, Abdullah's expertise in finance and business development drives Bengal Estates to effectively grow your wealth. Join us at Bengal Estates Limited, where Abdullah Al Loman's comprehensive knowledge and dedication are the cornerstones of our mission to create lasting value in the real estate market.",
    },
    {
      image: "/images/ourTeamImages/S M Mahfuzul Islam.jpg",
      name: "S M Mahfuzul islam",
      manDetails:
        "Our co-founder, S M Mahfuzul Islam, is a chemical engineer by profession with a profound passion for the real estate industry. Known for his exceptional ability to manage multiple real estate projects simultaneously, Mahfuzul excels in ensuring each project performs at its best. His strategic approach and meticulous attention to detail bring out the maximum value in every investment, regardless of the complexity or number of projects he oversees. Mahfuzul's expertise lies in steering the course of real estate investments with unwavering focus, ensuring that every project achieves its highest potential. His adept management skills ensure that investors receive the best possible returns, even when multiple projects are in play. At Bengal Estates Limited, S M Mahfuzul Islam’s dedication and unique talents are fundamental to our mission of delivering exceptional value and growth in the real estate market. Join us and experience how Mahfuzul’s visionary leadership can turn your real estate investments into thriving successes.",
    },
    {
      image: "/images/ourTeamImages/Mir Shahnewaz Arefin.jpg",
      name: "Mir Shahnewaz arefin",
      manDetails:
        "Our co-founder, Mir Shahnewaz Arefin, is a civil engineer by profession with a robust background in structural engineering. His professional expertise uniquely positions him to maximize the value of both residential and commercial real estate investments. Mir's keen understanding of value addition ensures that each property reaches its highest potential, offering advantages that general investors might miss. With a visionary approach and unwavering passion, Mir prioritizes our investors, ensuring they receive the utmost attention and dedication. He meticulously oversees every aspect of the company, keeping all elements under one umbrella to guarantee that no detail is overlooked, making each project a resounding success. At Bengal Estates Limited, Mir Shahnewaz Arefin's commitment and comprehensive knowledge are the pillars of our mission to provide exceptional value and growth in the real estate market. Join us and experience how Mir’s strategic leadership and dedication can elevate your real estate investments to new heights.",
    },
  ];
  return (
    <section className="mb-20 w-full">
      <div className=" overflow-hidden">
        <h2 className="text-center font-lato text-5xl mb-24">Our Team</h2>
        <div className="team__scroller">
          {teamCard.map((item, index) => {
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
        </div>
      </div>
    </section>
  );
};

export default OurTeamCard;
