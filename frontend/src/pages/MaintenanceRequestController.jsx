import { useEffect, useState } from "react";
import Container from "../components/shared/Container";
import Modal from "../components/Modal";
import { toast } from "react-toastify";
import TableRowOfMaintenanceRequest from "../components/TableRowOfMaintenanceRequest";
import {
  useActionTypeChangeByIdMutation,
  useGetMaintenanceRequestMessagesAllQuery,
} from "../redux/features/maintenanceRequestApi";
import ChatBox from "../components/ChatBox";

const MaintenanceRequestController = () => {
  const { data: requestMessageQuery, refetch } =
    useGetMaintenanceRequestMessagesAllQuery();
  const [actionTypeChangeMutation] = useActionTypeChangeByIdMutation();

  const [isShow, setIsShow] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

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
    <>
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
              {requestMessageQuery?.length > 0 ? (
                requestMessageQuery.map((item) => (
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
      </Container>

      {isShow && selectedMessage && (
        <Modal isShow={isShow} setIsShow={setIsShow}>
          <ChatBox />
        </Modal>
      )}
    </>
  );
};

export default MaintenanceRequestController;
