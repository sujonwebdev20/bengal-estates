import { useState } from "react";
import Container from "../components/shared/Container";
import Button from "../components/shared/Button";
import { useMaintenanceRequestMutation } from "../redux/features/maintenanceRequestApi";
import { toast } from "react-toastify";

const MaintenanceRequest = () => {
  const [maintenanceRequestFormOfUser, setMaintenanceRequestFormOfUser] =
    useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      requestMessage: "",
    });
  const [maintenanceRequestMutation] = useMaintenanceRequestMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await maintenanceRequestMutation(
        maintenanceRequestFormOfUser
      ).unwrap();

      if (response.success) {
        // setMaintenanceRequestFormOfUser({
        //   name: "",
        //   email: "",
        //   phone: "",
        //   address: "",
        //   requestMessage: "",
        // });
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
              value={maintenanceRequestFormOfUser.name}
              onChange={(e) =>
                setMaintenanceRequestFormOfUser({
                  ...maintenanceRequestFormOfUser,
                  name: e.target.value,
                })
              }
            />
            <input
              className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
              type="text"
              name="email"
              placeholder="Email"
              value={maintenanceRequestFormOfUser.email}
              onChange={(e) =>
                setMaintenanceRequestFormOfUser({
                  ...maintenanceRequestFormOfUser,
                  email: e.target.value,
                })
              }
            />
            <input
              className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
              type="text"
              name="phone"
              placeholder="Phone"
              value={maintenanceRequestFormOfUser.phone}
              onChange={(e) =>
                setMaintenanceRequestFormOfUser({
                  ...maintenanceRequestFormOfUser,
                  phone: e.target.value,
                })
              }
            />
            <input
              className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
              type="text"
              name="address"
              placeholder="Address"
              value={maintenanceRequestFormOfUser.address}
              onChange={(e) =>
                setMaintenanceRequestFormOfUser({
                  ...maintenanceRequestFormOfUser,
                  address: e.target.value,
                })
              }
            />

            <textarea
              className="w-full px-5 py-2 mt-3 rounded-lg bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300 resize-none"
              name="requestMessage"
              placeholder="Request Message"
              rows="5"
              value={maintenanceRequestFormOfUser.requestMessage}
              onChange={(e) =>
                setMaintenanceRequestFormOfUser({
                  ...maintenanceRequestFormOfUser,
                  requestMessage: e.target.value,
                })
              }
            ></textarea>
            <div className="grid place-items-center mt-5">
              <Button
                title={"create token"}
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

export default MaintenanceRequest;
