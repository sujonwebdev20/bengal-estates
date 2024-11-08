import { useEffect, useState } from "react";
import Container from "../components/Container";
import Modal from "../components/Modal";
import { toast } from "react-toastify";
import TableRowOfMaintenanceRequest from "../components/TableRowOfMaintenanceRequest";
import {
  useActionTypeChangeByIdMutation,
  useGetMaintenanceRequestMessagesQuery,
} from "../redux/features/maintenanceRequestApi";

const MaintenanceRequestController = () => {
  const { data, refetch } = useGetMaintenanceRequestMessagesQuery();
  const [actionTypeChangeMutation] = useActionTypeChangeByIdMutation();

  const [maintenanceRequestMessagesState, setMaintenanceRequestMessagesState] =
    useState([]);

  const [isShow, setIsShow] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    if (data) {
      setMaintenanceRequestMessagesState(data);
    }
    refetch();
  }, [data]);

  const actionTypeChangeHandler = async (e, id) => {
    try {
      if (window.confirm("Are you sure you want to change the action type?")) {
        const response = await actionTypeChangeMutation(id).unwrap();
        if (response.success) {
          refetch();
          toast.success(response.message);
        }
      }
    } catch (error) {
      toast.error("Failed to change action type!");
      console.error(error);
    }
  };

  const handleRowClick = (message) => {
    setSelectedMessage(message);
    setIsShow(true);
  };

  return (
    <Container>
      <div className="overflow-auto h-[40rem] w-full bg-dark_trans_purple px-5 py-8 rounded-lg mb-20">
        <table className="w-[68rem]">
          <thead className="border-b-4 border-light_purple">
            <tr className="grid grid-cols-6 place-items-center">
              <th>Date</th>
              <th>ID</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {maintenanceRequestMessagesState.length > 0 ? (
              maintenanceRequestMessagesState.map((item) => (
                <TableRowOfMaintenanceRequest
                  key={item._id}
                  requestMassage={item}
                  handleRowClick={() => handleRowClick(item)}
                  actionTypeChangeHandler={actionTypeChangeHandler}
                />
              ))
            ) : (
              <tr>
                <td className="text-center text-4xl col-span-5">
                  Enquiry not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isShow && selectedMessage && (
        <Modal isShow={isShow} setIsShow={setIsShow}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] text-gray-300 max-sm:left-0 max-sm:translate-x-0">
            <h2 className="text-2xl bg-dark_trans_purple rounded-md mb-3 px-4 py-1">
              <span className="text-light_purple">Name: </span>
              {selectedMessage.name}
            </h2>
            <h3 className="text-lg bg-dark_trans_purple rounded-md mb-3 px-4 py-1">
              <span className="text-light_purple">Email: </span>
              {selectedMessage.email}
            </h3>
            <h3 className="text-lg bg-dark_trans_purple rounded-md mb-3 px-4 py-1">
              <span className="text-light_purple">Phone: </span>
              {selectedMessage.phone}
            </h3>
            <h3 className="text-lg bg-dark_trans_purple rounded-md mb-3 px-4 py-1">
              <span className="text-light_purple">Address: </span>
              {selectedMessage.address}
            </h3>
            <p className="text-md bg-dark_trans_purple rounded-md mb-3 px-4 py-1">
              <span className="text-light_purple">Message: </span>
              {selectedMessage.requestMessage}
            </p>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default MaintenanceRequestController;
