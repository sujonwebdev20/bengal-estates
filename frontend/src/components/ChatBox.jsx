import { useEffect, useRef, useState } from "react";
// import { useGetMessagesQuery } from "../redux/features/messageApi";
import Button from "./shared/Button";
import Container from "./shared/Container";
import {
  useConversationOfRequestMutation,
  useGetSpecificChatQuery,
} from "../redux/features/maintenanceRequestApi";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
import { io } from "socket.io-client";

const ChatBox = ({ conversationId }) => {
  // React hooks initialize
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [formOfChatMessage, setFormOfChatMessage] = useState({
    message: "",
  });

  // Redux hooks initialize
  const { data: getMessagesForUserQuery } =
    useGetSpecificChatQuery(conversationId);
  const [requestMutation] = useConversationOfRequestMutation();
  const { token } = useSelector((slice) => slice.auth);

  // Socket.IO server connection
  useEffect(() => {
    console.log(socketRef.current);

    if (getMessagesForUserQuery) {
      setMessages(getMessagesForUserQuery);
    }
    // Connect to the Socket.IO server
    socketRef.current = io("http://localhost:5000");
    // Receive message from server and update state
    socketRef.current.on("receive_message", (data) => {
      setMessages((prevMessages) => [...(prevMessages || []), data]);
    });
    // Cleanup on component unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, [getMessagesForUserQuery]);

  // Check token of user. if token not exist, redirect to /signin page.
  const decodedToken = jwtDecode(token);
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  // const { data: messages, isLoading } = useGetMessagesQuery();

  const receiverId = "66c21c39f900a8f7a144d840";

  // Message data submit handler.
  const dataSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await requestMutation({
        conversationId,
        data: formOfChatMessage,
      }).unwrap();

      console.log(response);

      const messageData = {
        conversationId,
        message: formOfChatMessage.message,
        senderId: decodedToken.userId, // Your user's ID
        time: new Date().toLocaleTimeString(),
      };
      // Send message to server
      socketRef.current.emit("send_message", messageData);
      setFormOfChatMessage({
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="rounded-lg bg-dark_trans_purple p-6 mx-auto md:w-[60vw] max-md:w-[90vw] h-5/6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]">
        <div className="overflow-y-auto h-[calc(100%-64px)] mb-16">
          {/* Messages here */}
          {messages?.map((message) =>
            message.senderId === decodedToken.userId ? (
              <div key={message?._id} className="flex gap-2.5 mb-4 justify-end">
                <div className="">
                  <h5 className="text-right text-light_purple text-sm font-semibold leading-snug pb-1">
                    You
                  </h5>
                  <p className="px-3.5 py-1.5 text-white text-sm font-normal leading-snug bg-light_purple rounded">
                    {message?.message}
                  </p>
                  <small className="text-gray-300 text-xs font-normal leading-4 py-1 justify-start items-center inline-flex mb-2.5">
                    05:14 PM
                  </small>
                </div>
                <img
                  src="https://pagedone.io/asset/uploads/1704091591.png"
                  alt="Hailey image"
                  className="w-10 h-11"
                />
              </div>
            ) : (
              <div key={message?._id} className="flex gap-2.5 mb-4">
                <img
                  src="https://pagedone.io/asset/uploads/1710412177.png"
                  alt="Shanay image"
                  className="w-10 h-11"
                />
                <div className="grid">
                  <h5 className="text-light_purple text-sm font-semibold leading-snug pb-1">
                    {decodedToken?.name}
                  </h5>
                  <p className="text-black text-sm font-semibold leading-snug px-3.5 py-2 bg-white rounded justify-start items-center gap-3 inline-flex">
                    {message?.message}
                  </p>
                  <small className="text-gray-300 text-xs font-normal leading-4 py-1 justify-end items-center inline-flex mb-2.5">
                    05:14 PM
                  </small>
                </div>
              </div>
            )
          )}
        </div>

        {/* Input field */}
        <form
          onSubmit={dataSubmitHandler}
          className="fixed bottom-0 left-0 w-full p-4 bg-dark_trans_purple z-10"
        >
          <div className="flex items-center gap-2 justify-between w-full">
            <input
              className="grow shrink basis-0 w-full text-white focus:outline-none bg-transparent border-2 border-light_purple rounded-full pl-3 pr-1 py-1"
              name="message"
              placeholder="Type here..."
              value={formOfChatMessage.message}
              onChange={(e) =>
                setFormOfChatMessage({
                  ...formOfChatMessage,
                  message: e.target.value,
                })
              }
            />
            <Button
              title={"send"}
              width={"128px"}
              height={"38.4px"}
              type={"submit"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBox;
