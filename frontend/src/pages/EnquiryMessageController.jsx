import { useEffect, useState } from "react";
import Container from "../components/Container";
import {
  useDeleteEnquiryMessageByIdMutation,
  useGetGeneralEnquiryQuery,
} from "../redux/features/generalEnquiryApi";
import TableRowOfEnquiryMessages from "../components/TableRowOfEnquiryMessages";
import Modal from "../components/Modal";
import { toast } from "react-toastify";

const EnquiryMessageController = () => {
  const { data, refetch } = useGetGeneralEnquiryQuery();

  const [enquiryMessagesState, setEnquiryMessagesState] = useState([]);
  const [deleteEnquiryMessageByIdMutation] =
    useDeleteEnquiryMessageByIdMutation();

  const [isShow, setIsShow] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    if (data) {
      setEnquiryMessagesState(data);
    }
    refetch();
  }, [data]);

  const deleteEnquiryMessage = async (e, id) => {
    e.stopPropagation();

    try {
      if (window.confirm("Are you sure you want to delete")) {
        const response = await deleteEnquiryMessageByIdMutation(id).unwrap();
        refetch();
        setEnquiryMessagesState(
          enquiryMessagesState.filter((message) => message._id !== id)
        );
        if (response) {
          toast.success(response.message);
        }
      }
    } catch (error) {
      toast.error("Failed to delete message: ", error);
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
            <tr className="grid grid-cols-5 place-items-center">
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiryMessagesState.length > 0 ? (
              enquiryMessagesState.map((item) => (
                <TableRowOfEnquiryMessages
                  key={item._id}
                  enquiryMessage={item}
                  deleteEnquiryMessage={deleteEnquiryMessage}
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
              <span className="text-light_purple">Location: </span>
              {selectedMessage.location}
            </h3>
            <p className="text-md bg-dark_trans_purple rounded-md mb-3 px-4 py-1">
              <span className="text-light_purple">Description: </span>
              {selectedMessage.description}
            </p>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default EnquiryMessageController;
