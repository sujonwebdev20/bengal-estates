import { MdOutlineHandyman } from "react-icons/md";
import { TbHomeDollar } from "react-icons/tb";
import { TbUserQuestion } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import Container from "../components/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const TenantPortal = () => {
  const tenantPortalCardAnim = useRef();

  useGSAP(() => {
    gsap.fromTo(
      tenantPortalCardAnim.current.children,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 0.5,
      }
    );
  });

  return (
    <>
      <Container>
        <section className="flex justify-center my-20">
          <div
            ref={tenantPortalCardAnim}
            className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center gap-4"
          >
            <div className="w-[15rem] max-sm:w-full h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg">
              <TbUserQuestion className="text-8xl text-light_purple" />
              <h3 className="text-2xl mt-6 font-lato text-center">
                General Enquiry
              </h3>
            </div>
            <a href="https://www.apartments.com/" target="_blank">
              <div className="w-[15rem] h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg">
                <TbHomeDollar className="text-8xl text-light_purple" />
                <h3 className="text-2xl mt-6 font-lato text-center">
                  Pay Your Rent
                </h3>
              </div>
            </a>

            <div className="w-[15rem] h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg">
              <MdOutlineHandyman className="text-8xl text-light_purple" />
              <h3 className="text-2xl mt-6 font-lato text-center">
                Maintenance Request
              </h3>
            </div>
            <div className="w-[15rem] h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg">
              <FaSackDollar className="text-8xl text-light_purple" />
              <h3 className="text-2xl mt-6 font-lato text-center">
                Pay Utilities
              </h3>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default TenantPortal;
