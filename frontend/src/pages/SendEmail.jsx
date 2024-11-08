import { useState, useMemo, useRef } from "react";
import Container from "../components/shared/Container";
import Button from "../components/shared/Button";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { useSendEmailMutation } from "../redux/features/sendEmailApi";

const SendEmail = ({ placeholder }) => {
  const editor = useRef(null);

  const [emailData, setEmailData] = useState({
    subject: "",
    to: [],
    body: "",
  });
  const [sendEmailMutation, { isLoading }] = useSendEmailMutation();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );

  const toFieldEmailList = (e) => {
    const toEmailArray = e.target.value
      .split(",")
      .map((feature) => feature.trim());
    setEmailData({
      ...emailData,
      to: toEmailArray,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await sendEmailMutation(emailData).unwrap();

      if (response.success) {
        toast.success("Email sent successfully!");
        setEmailData({
          subject: "",
          to: [],
          body: "",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      // Reset editor content after sending email
      editor.current.value = "";
    }
  };

  return (
    <Container>
      <div className="w-full flex justify-center items-center mb-20">
        <div className="w-full mx-5 bg-dark_trans_purple px-3 py-8 rounded-lg">
          <form className="font-inter text-md" onSubmit={submitHandler}>
            <div className="mt-3 mb-5">
              <input
                className="w-full px-5 py-1 mb-5 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="subject"
                placeholder="Subject:"
                required={true}
                value={emailData.subject}
                onChange={(e) =>
                  setEmailData({
                    ...emailData,
                    subject: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="to"
                placeholder="To:"
                required={true}
                value={emailData.to}
                onChange={toFieldEmailList}
              />
            </div>
            <div className="text-black">
              <JoditEditor
                ref={editor}
                value={emailData.body}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onChange={(newContent) =>
                  setEmailData({ ...emailData, body: newContent })
                }
              />
            </div>

            <div className="grid place-items-center mt-5">
              <Button
                disabled={isLoading ? true : false}
                title={isLoading ? "sending..." : "send email"}
                width={"10rem"}
                height={"2.5rem"}
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

SendEmail.propTypes = {
  placeholder: PropTypes.string,
};

export default SendEmail;
