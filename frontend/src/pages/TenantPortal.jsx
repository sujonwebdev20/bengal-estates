import { MdOutlineHandyman } from "react-icons/md";
import { TbHomeDollar } from "react-icons/tb";
import { TbUserQuestion } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import Container from "../components/shared/Container";
import OptionCard from "../components/OptionCard";

const configurationArray = [
  {
    path: "/general_enquiry",
    icon: TbUserQuestion,
    title: "General Enquiry",
  },
  {
    path: "https://www.apartments.com",
    icon: TbHomeDollar,
    title: "Pay Your Rent",
  },
  {
    path: "/maintenance_request",
    icon: MdOutlineHandyman,
    title: "Maintenance Request",
  },
  {
    path: "/utilities",
    icon: FaSackDollar,
    title: "Pay Utilities",
  },
];

const TenantPortal = () => {
  return (
    <>
      <Container>
        <section className="flex justify-center my-20">
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center gap-4">
            {configurationArray.map((configure, index) => (
              <OptionCard
                key={index + 1}
                path={configure.path}
                icon={<configure.icon className="text-6xl text-light_purple" />}
                title={configure.title}
              />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};

export default TenantPortal;
