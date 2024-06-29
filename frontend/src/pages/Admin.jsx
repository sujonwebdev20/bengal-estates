import { Link } from "react-router-dom";
import Container from "../components/Container";
import { MdCreateNewFolder } from "react-icons/md";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { BiSolidCreditCardFront } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { MdOutlineContactMail } from "react-icons/md";

const Admin = () => {
  return (
    <Container>
      <section className="flex justify-center my-20">
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 place-items-center gap-4">
          <Link
            to="/admin/property/create"
            className="w-full h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg"
          >
            <MdCreateNewFolder className="text-8xl text-light_purple" />
            <h3 className="text-2xl font-lato text-center mt-4">
              Create Property
            </h3>
          </Link>

          <Link
            to="/admin/property/all"
            className="w-full h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg"
          >
            <MdFormatListBulletedAdd className="text-8xl text-light_purple" />
            <h3 className="text-2xl font-lato text-center mt-4">
              Show All Properties
            </h3>
          </Link>

          <Link
            to="/admin/blog/create"
            className="w-full h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg"
          >
            <GrArticle className="text-8xl text-light_purple" />
            <h3 className="text-2xl font-lato text-center mt-4">Create Blog</h3>
          </Link>

          <Link
            to="/admin/blog/all"
            className="w-full h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg"
          >
            <BiSolidCreditCardFront className="text-8xl text-light_purple" />
            <h3 className="text-2xl font-lato text-center mt-4">
              Show All Blogs
            </h3>
          </Link>
          <Link
            to="/admin/contact_messages"
            className="w-full h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg"
          >
            <MdOutlineContactMail className="text-8xl text-light_purple" />
            <h3 className="text-2xl font-lato text-center mt-4">
              Contact Messages
            </h3>
          </Link>
          <Link
            to="/admin/enquiry_messages"
            className="w-full h-[15rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg"
          >
            <MdFeedback className="text-8xl text-light_purple" />
            <h3 className="text-2xl font-lato text-center mt-4">
              Enquiry Messages
            </h3>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default Admin;
