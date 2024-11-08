import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Container from "../components/Container";

const Faq = () => {
  const accordingContent = [
    {
      id: 1,
      summary: "How will we file taxes for our investments at LLC?",
      details: [
        "As a member of an LLC with investments, you will typically receive a Schedule K-1 (Form 1065) if the LLC is taxed as a partnership. The Schedule K-1 outlines your share of the LLC's income, deductions, and other tax-related information. You can then use the information from the Schedule K-1 to report your share of the LLC's income or losses on your personal tax return.",
      ],
    },
    {
      id: 2,
      summary: "How do you select a property?",
      details: [
        "In selecting a particular real estate property, we consider a number of critical factors, including but not limited to maximum return on investment, cash flow, future appreciation potential, location, and other important factors that will impact your overall return on investment over the years. Our approach involves a meticulous analysis of rental income potential, property appreciation prospects, and cash flow to ensure the property aligns with your investment objectives. Additionally, we prioritize properties in favorable locations with strong economic indicators, good schools, and low crime rates. Monitoring market conditions and assessing tenant demand are also key components of our property selection process. Ultimately, our goal is to identify properties that offer a combination of strong financial performance and long-term value, aligning with your investment strategy.",
      ],
    },
    {
      id: 3,
      summary: "How do we get the yearly cash flow back?",
      details: [
        "You will receive the yearly cash flow as a dividend or yearly profit at the end of every year, which serves to protect your original share in the investment while providing you with a consistent income stream. Moreover, you'll have the option to reinvest your cash flow back into the investment. We highly recommend considering reinvestment if you do not require the additional cash flow for immediate needs. This approach allows us to optimize your returns by leveraging these funds to identify and acquire better investment opportunities, ultimately working to enhance your overall investment portfolio over time.",
      ],
    },
    {
      id: 4,
      summary: "How do you transfer the investment money?",
      details: [
        "To transfer funds, you will receive detailed information on how to initiate a wire transfer to the company's designated bank account. We prioritize security and transparency in all financial transactions and do not use personal accounts to receive funds. Rest assured, you will be provided with clear and secure instructions for transferring your investment capital to our designated corporate account, ensuring a seamless and trustworthy process.",
      ],
    },
    {
      id: 5,
      summary: "How much minimum fund do I need to invest?",
      details: [
        "The minimum investment amount required is typically $20,000. This amount can be provided by a single individual or by a group formed by one person. It's important to note that the minimum investment amount may vary depending on the specific investment opportunity and the terms outlined in the investment offering documents. However, based on your recommendation, a minimum fund of $20,000 is a starting point for participation in our investment opportunities.",
      ],
    },
    {
      id: 6,
      summary: "Can I invest at a location of my choice?",
      details: [
        "Certainly, your location preferences are valuable to us, and we aim to accommodate them while making informed investment decisions. In the current high mortgage rate environment, our strategy is to find deals that allow you to cover all monthly expenses, including the mortgage, along with other associated costs, while still providing you with some positive cash flow. We understand the importance of ensuring that your investments remain financially efficient, and we prioritize deals that align with this approach. While we consider your desired location, our ultimate goal is to secure investments that not only meet your location preferences but also deliver strong returns by maximizing cash flow and optimizing overall return on investment.",
      ],
    },
    {
      id: 7,
      summary:
        "What will be my legal documentation about this investment? How can I be protected if a legal issue arises?",
      details: [
        "Your legal documentation for this investment will be structured through the formation of an LLC (Limited Liability Company). As an investor, you will receive an LLC partnership agreement proportionate to your investment. Initially, you will be provided with an Articles of Operating Agreement outlining the terms and conditions of your investment. To ensure transparency and protection of your interests, we have a process in place to update the Articles of Operating Agreement semi-annually. If there are any new investors added or if existing investors increase their investment share during this period, you will receive updates reflecting these changes. This way, you are kept informed of any modifications that may affect your investment, and your legal rights and responsibilities are documented and protected within the framework of the LLC structure. Additionally, the LLC structure provides limited liability protection, shielding your personal assets from potential legal issues related to the investment.",
      ],
    },
    {
      id: 8,
      summary: "How do you manage transparency to the members?",
      details: [
        "Transparency to our members is of utmost importance in our investment approach. We uphold this commitment by conducting all financial transactions exclusively through the company's designated bank accounts, ensuring a clear and traceable record of each transaction. Our collaboration with experienced tax professionals and financial experts guarantees accurate tax filings and adherence to all regulatory requirements, with members having direct access to these professionals for any inquiries. Regular updates on the investment's performance and financial status are provided to our members, along with access to records, ensuring they are well-informed. Open and transparent communication is encouraged, and our team is readily available to address any questions or concerns. Our dedication to transparency is a cornerstone of our service, fostering trust and confidence among our valued members.",
      ],
    },
    {
      id: 9,
      summary: "What’s the entry/exit criteria for the investors?",
      details: [
        "Investors have the flexibility to invest at their convenience. At the time of investment, the allocation of shares is determined based on the total valuation of the company's net worth. This approach ensures that new investment amounts are provided shares proportionately, and the total asset value of the investment increases by the newly invested amount. Importantly, this structure safeguards existing investors from dilution, as their ownership percentages remain intact. Similarly, new investors are protected by receiving shares proportionate to their investment amount.",
      ],
    },
    {
      id: 10,
      summary: "When and how can the fund be withdrawn?",
      details: [
        "Fund withdrawal in real estate investments, given the less liquid nature of real estate assets, is subject to certain conditions. Investors seeking to withdraw their funds will be permitted to do so if they can source a new investor to essentially take over their investment share. Alternatively, investors can initiate a withdrawal by providing us with a NOTICE OF AT LEAST 6 MONTHS in advance. This notice period allows Bengal Estates Property to strategically plan for the withdrawal, potentially sourcing the necessary funds or identifying suitable opportunities to optimize the investment portfolio. This approach ensures that the withdrawal process is structured and minimizes disruptions while safeguarding the interests of all investors in the real estate asset.",
      ],
    },
    {
      id: 11,
      summary: "What happened if something happened to me?",
      details: [
        "If something were to happen to you, you have the option to designate an heir or beneficiary to inherit your investment. By specifying your chosen heir, you can ensure that your investment is passed on to your desired recipient, preserving the continuity of the investment and its potential benefits for your designated heir. This arrangement can be documented and formalized in the investment's legal agreements, allowing for a smooth transition in the event of unforeseen circumstances.",
      ],
    },
    {
      id: 12,
      summary:
        "What will happen if someone wants to invest 2 years down the road from initial investment or someone want to add more funds to their existing investment?",
      details: [
        "At the time of investment, the allocation of shares is determined based on the total valuation of the company's net worth. This approach ensures that new investment amounts are provided shares proportionately, and the total asset value of the investment increases by the newly invested amount. Importantly, this structure safeguards existing investors from dilution, as their ownership percentages remain intact. Similarly, new investors are protected by receiving shares proportionate to their investment amount.",
      ],
    },
    {
      id: 13,
      summary: "What kind of involvement do you expect from us?",
      details: [
        "We understand that your involvement in the investment is primarily financial, where you provide the investment funds. Once you've made your investment, Bengal Estates will take care of all aspects of property acquisition, management, and operations. You can expect to receive optional cash flow at the end of each year, allowing you to enjoy passive income while Bengal Estates handles the day-to-day responsibilities. This approach allows you to continue building your long-term equity portfolio without the hassles of hands-on property management, providing you with a convenient and hassle-free investment experience.",
      ],
    },
    {
      id: 14,
      summary:
        "What am I getting investing with Bengal Estates as I have to give 20% share to Bengal Estates?",
      details: [
        "Indeed, while investing with Bengal Estates entails sharing a 20% ownership and profit stake, it offers a multitude of advantages that outweigh this cost. Think of it as an investment in expertise, convenience, and peace of mind. Investing in the right real estate vehicle or property requires significant experience and knowledge, which not everyone possesses. Sometimes, opportunities are missed due to a lack of experience or hesitation. Once you acquire an investment property, you'll find that managing it profitably is a complex and time-consuming task, involving property preparation, tenant search, day-to-day renter management, repairs, legal compliance, and more.",
        "Even if you hire a property management company, you still need to invest substantial time researching properties and making critical investment decisions. Many real estate investment partnerships charge higher fees, often 30% or more, for these services. We've consciously chosen to charge only 20% to ensure you receive the maximum possible return on your investment. We handle the time commitment, expertise, and the mental stress associated with property management, allowing you to enjoy a hassle-free investment experience and the best possible returns. Our pride lies in helping you grow your equity portfolio while minimizing your workload and maximizing your profits.",
      ],
    },
  ];
  const [open, setOpen] = useState({});

  const toggleIcon = (index) => {
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Container>
      <section className="mb-32">
        <h2 className="font-lato lg:text-5xl mb-11 text-center min-[320px]:text-4xl mt-10">
          FAQs about Our Homes For Rent
        </h2>

        {accordingContent.map((item, index) => (
          <details
            onClick={() => toggleIcon(index)}
            key={item.id}
            className="details-marker-none cursor-pointer mb-6"
          >
            <summary className="bg-dark_trans_purple rounded-lg px-6 py-2 font-lato sm:text-2xl min-[320px]:text-xl font-bold flex items-center gap-3 transition">
              {open[index] ? (
                <div className="bg-dark_trans_purple rounded-full p-1 border-2 border-[#ffffff82]">
                  <FaMinus className="text-light_purple text-2xl" />
                </div>
              ) : (
                <div className="bg-dark_trans_purple rounded-full p-1 border-2 border-[#ffffff82]">
                  <FaPlus className="text-light_purple text-2xl" />
                </div>
              )}
              {item.summary}
            </summary>

            <ul>
              {item.details.map((detail, detailIndex) => (
                <li
                  key={`${item.id}-${detailIndex}`} // Unique key generation combining item.id and detailIndex
                  className="ml-16 py-4 font-inter text-base text-[#ffffffc7] list-disc"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </details>
        ))}
        <details
          onClick={() => toggleIcon(accordingContent.length + 1)}
          key="additional"
          className="details-marker-none cursor-pointer mb-6"
        >
          <summary className="bg-dark_trans_purple rounded-lg px-6 py-2 font-lato sm:text-2xl min-[320px]:text-xl font-bold flex items-center gap-3 transition">
            {open[accordingContent.length + 1] ? (
              <div className="bg-dark_trans_purple rounded-full p-1 border-2 border-[#ffffff82]">
                <FaMinus className="text-light_purple text-2xl" />
              </div>
            ) : (
              <div className="bg-dark_trans_purple rounded-full p-1 border-2 border-[#ffffff82]">
                <FaPlus className="text-light_purple text-2xl" />
              </div>
            )}
            What will be the investment and fee structure?
          </summary>

          <ul className="list-disc [&_li]:text-[#ffffffc7] [&_li]:text-base">
            <li className="ml-16 py-4 font-inter text-base  list-disc">
              The investment and fee structure for this opportunity is as
              follows:
            </li>
            <ul className="ml-16 py-4 list-disc">
              <li>Investor Contribution:</li>
              <li className="ml-16 py-4">
                The investor will provide all the funds required for the
                investment.
              </li>
              <li className="ml-16 py-4">
                In return, the investor will acquire 80% ownership of the
                investment.
              </li>
            </ul>
            <ul className="ml-16 py-4 list-disc">
              <li>
                Sponsor or Manager (Bengal Estates Property) Contribution:
              </li>

              <li className="ml-16 py-4">
                The sponsor or manager, in this case, Bengal Estates Property,
                will receive 20% ownership share in the investment.
              </li>
              <li className="ml-16 py-4">
                Bengal Estates Property will provide a comprehensive range of
                services, including property acquisition and management, to
                ensure the successful operation and growth of the investment.
              </li>
            </ul>
            <li className="ml-16 py-4">
              This structure ensures that the investor holds the majority
              ownership share while benefiting from the professional services
              and expertise provided by Bengal Estates Property. It aligns the
              interests of both parties to work collaboratively for the success
              of the investment. Specific details regarding fees and profit
              sharing may be further outlined in the investment offering
              documents and agreements.
            </li>
          </ul>
        </details>
      </section>
    </Container>
  );
};

export default Faq;
