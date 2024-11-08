import { Link } from "react-router-dom";
import Container from "../components/Container";
import { MdCreateNewFolder } from "react-icons/md";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { BiSolidCreditCardFront } from "react-icons/bi";
import { MdFeedback } from "react-icons/md";
import { MdOutlineContactMail } from "react-icons/md";
import OptionCardForGoingUrl from "../components/OptionCardForGoingUrl";

const Admin = () => {
  return (
    <Container>
      <section className="flex justify-center my-20">
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 place-items-center gap-4">
          <OptionCardForGoingUrl
            path={"/admin/property/create"}
            icon={<MdCreateNewFolder className="text-8xl text-light_purple" />}
            title={"Create Property"}
          />

          <OptionCardForGoingUrl
            path={"/admin/property/all"}
            icon={
              <MdFormatListBulletedAdd className="text-8xl text-light_purple" />
            }
            title={"Show All Properties"}
          />

          <OptionCardForGoingUrl
            path={"/admin/blog/create"}
            icon={<GrArticle className="text-8xl text-light_purple" />}
            title={"Create Blog"}
          />

          <OptionCardForGoingUrl
            path={"/admin/blog/all"}
            icon={<GrArticle className="text-8xl text-light_purple" />}
            title={"Show All Blogs"}
          />

          <OptionCardForGoingUrl
            path={"/admin/contact_messages"}
            icon={
              <MdOutlineContactMail className="text-8xl text-light_purple" />
            }
            title={"Contact Messages"}
          />

          <OptionCardForGoingUrl
            path={"/admin/enquiry_messages"}
            icon={<MdFeedback className="text-8xl text-light_purple" />}
            title={"Enquiry Messages"}
          />

          <OptionCardForGoingUrl
            path={"/admin/maintenance_request/all"}
            icon={<MdFeedback className="text-8xl text-light_purple" />}
            title={"Maintenance Requests"}
          />
        </div>
      </section>
    </Container>
  );
};

export default Admin;
