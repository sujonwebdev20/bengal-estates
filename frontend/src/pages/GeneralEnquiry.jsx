import { useState } from "react";
import Container from "../components/shared/Container";
import Button from "../components/shared/Button";
import { useGeneralEnquiryMutation } from "../redux/features/generalEnquiryApi";
import { toast } from "react-toastify";

const GeneralEnquiry = () => {
  const [enquiryFormOfUser, setEnquiryFormOfUser] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
    description: "",
  });
  const [generalEnquiryMutation] = useGeneralEnquiryMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await generalEnquiryMutation(enquiryFormOfUser).unwrap();

      if (response.success) {
        setEnquiryFormOfUser({
          name: "",
          email: "",
          location: "",
          phone: "",
          description: "",
        });
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <Container>
      <div className="w-full flex justify-center items-center mb-20">
        <div className="w-full mx-5 bg-dark_trans_purple px-3 py-8 rounded-lg">
          <form
            className="font-inter text-md flex flex-col gap-3"
            onSubmit={submitHandler}
          >
            <input
              className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
              type="text"
              name="name"
              placeholder="Name"
              value={enquiryFormOfUser.name}
              onChange={(e) =>
                setEnquiryFormOfUser({
                  ...enquiryFormOfUser,
                  name: e.target.value,
                })
              }
            />
            <input
              className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
              type="text"
              name="email"
              placeholder="Email"
              value={enquiryFormOfUser.email}
              onChange={(e) =>
                setEnquiryFormOfUser({
                  ...enquiryFormOfUser,
                  email: e.target.value,
                })
              }
            />
            <input
              className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
              type="text"
              name="location"
              placeholder="Location"
              value={enquiryFormOfUser.location}
              onChange={(e) =>
                setEnquiryFormOfUser({
                  ...enquiryFormOfUser,
                  location: e.target.value,
                })
              }
            />
            <input
              className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
              type="text"
              name="phone"
              placeholder="Phone"
              value={enquiryFormOfUser.phone}
              onChange={(e) =>
                setEnquiryFormOfUser({
                  ...enquiryFormOfUser,
                  phone: e.target.value,
                })
              }
            />
            <textarea
              className="w-full px-5 py-2 mt-3 capitalize rounded-lg bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300 resize-none"
              name="description"
              placeholder="Description"
              rows="5"
              value={enquiryFormOfUser.description}
              onChange={(e) =>
                setEnquiryFormOfUser({
                  ...enquiryFormOfUser,
                  description: e.target.value,
                })
              }
            ></textarea>
            <div className="grid place-items-center mt-5">
              <Button title={"submit"} width={"10rem"} height={"2.5rem"} />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default GeneralEnquiry;
