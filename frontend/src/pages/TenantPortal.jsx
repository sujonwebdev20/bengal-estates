import { MdOutlineHandyman } from "react-icons/md";
import { TbHomeDollar } from "react-icons/tb";
import { TbUserQuestion } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import Container from "../components/Container";
import OptionCardForGoingUrl from "../components/OptionCardForGoingUrl";

const TenantPortal = () => {
  return (
    <>
      <Container>
        <section className="flex justify-center my-20">
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center gap-4">
            <OptionCardForGoingUrl
              path={"/general_enquiry"}
              icon={<TbUserQuestion className="text-8xl text-light_purple" />}
              title={"General Enquiry"}
            />

            <OptionCardForGoingUrl
              path={"/https://www.apartments.com/"}
              icon={<TbHomeDollar className="text-8xl text-light_purple" />}
              title={"Pay Your Rent"}
            />

            <OptionCardForGoingUrl
              path={"/maintenance_request"}
              icon={
                <MdOutlineHandyman className="text-8xl text-light_purple" />
              }
              title={"Maintenance Request"}
            />

            <OptionCardForGoingUrl
              path={"/utilities"}
              icon={<FaSackDollar className="text-8xl text-light_purple" />}
              title={"Pay Utilities"}
            />
          </div>
        </section>
      </Container>
    </>
  );
};

export default TenantPortal;
