import { useState } from "react";
import Button from "../components/Button";
import { toast } from "react-toastify";
import { useContactMutation } from "../redux/features/contactApi";

const Contact = () => {
  const [contactMutation] = useContactMutation();
  const [contactFormOfUser, setContactFormOfUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await contactMutation(contactFormOfUser).unwrap();
      if (response.success) {
        setContactFormOfUser({
          name: "",
          email: "",
          message: "",
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
    <form
      onSubmit={submitHandler}
      className="w-[50%] max-sm:w-full h-[21rem] flex flex-col justify-center lg:gap-6 max-lg:gap-4"
    >
      <input
        className="w-full px-5 py-2 rounded-lg bg-dark_trans_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
        type="text"
        name="name"
        placeholder="Name"
        value={contactFormOfUser.name}
        onChange={(e) =>
          setContactFormOfUser({
            ...contactFormOfUser,
            name: e.target.value,
          })
        }
      />
      <input
        className="w-full px-5 py-2 rounded-lg bg-dark_trans_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
        type="email"
        name="email"
        placeholder="Email"
        value={contactFormOfUser.email}
        onChange={(e) =>
          setContactFormOfUser({
            ...contactFormOfUser,
            email: e.target.value,
          })
        }
      />
      <textarea
        className="w-full px-5 py-2 rounded-lg bg-dark_trans_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300 resize-none"
        name="message"
        placeholder="Message"
        rows="5"
        value={contactFormOfUser.message}
        onChange={(e) =>
          setContactFormOfUser({
            ...contactFormOfUser,
            message: e.target.value,
          })
        }
      ></textarea>
      <Button title={"send"} width={"8rem"} height={"2.4rem"} />
    </form>
  );
};

export default Contact;
