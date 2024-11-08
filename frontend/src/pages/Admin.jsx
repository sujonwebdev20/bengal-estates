import Container from "../components/shared/Container";
import { MdCreateNewFolder } from "react-icons/md";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { MdFeedback } from "react-icons/md";
import { MdOutlineContactMail } from "react-icons/md";
import OptionCard from "../components/OptionCard";
import { IoIosSend } from "react-icons/io";

const configurationArray = [
  {
    path: "/admin/properties/create",
    icon: MdFormatListBulletedAdd,
    title: "Create Property",
  },
  {
    path: "/admin/properties",
    icon: MdCreateNewFolder,
    title: "Show All Properties",
  },
  {
    path: "/admin/blogs/create",
    icon: GrArticle,
    title: "Create Blog",
  },
  {
    path: "/admin/blogs ",
    icon: GrArticle,
    title: "Show All Blogs",
  },
  {
    path: "/admin/contact-messages",
    icon: MdOutlineContactMail,
    title: "Contact Messages",
  },
  {
    path: "/admin/enquiry-messages",
    icon: MdFeedback,
    title: "Enquiry Messages",
  },
  {
    path: "/admin/maintenance-requests",
    icon: MdFeedback,
    title: "Maintenance Requests",
  },
  {
    path: "/admin/newsies",
    icon: MdFeedback,
    title: "Create News",
  },
  {
    path: "/admin/newsies",
    icon: MdFeedback,
    title: "Show All News",
  },
  {
    path: "/admin/sendmail",
    icon: IoIosSend,
    title: "Send Email",
  },
];

const Admin = () => {
  return (
    <Container>
      <section className="flex justify-center my-20">
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 place-items-center gap-4">
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
  );
};

export default Admin;
