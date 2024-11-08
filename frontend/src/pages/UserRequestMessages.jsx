import { useEffect, useState } from "react";
import Container from "../components/shared/Container";
import Modal from "../components/Modal";
import { toast } from "react-toastify";
import { useGetMaintenanceRequestMessagesOfUserQuery } from "../redux/features/maintenanceRequestApi";
import TableRowOfUserRequestMessages from "../components/TableRowOfUserRequestMessages";
import ChatBox from "../components/ChatBox";

const UserRequestMessages = () => {
  const { data: requestList } = useGetMaintenanceRequestMessagesOfUserQuery();

  const [isShow, setIsShow] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleRowClick = (message) => {
    setSelectedMessage(message);
    // console.log(message);

    setIsShow(true);
  };

  // console.log(selectedMessage);

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
            {requestList?.length > 0 ? (
              requestList.map((item) => (
                <TableRowOfUserRequestMessages
                  key={item._id}
                  requestMassage={item}
                  handleRowClick={() => handleRowClick(item)}
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
          {/* <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] rounded-md overflow-auto"> */}
          <ChatBox conversationId={selectedMessage._id} />
          {/* </div> */}
        </Modal>
      )}
    </Container>
  );
};

export default UserRequestMessages;
