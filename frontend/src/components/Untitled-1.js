const ChatBox = ({ conversationId }) => {
  // console.log(conversationId);

  // const { data: messages, isLoading } = useGetMessagesQuery();
  const [conversationOfRequestMutation, { error }] =
    useConversationOfRequestMutation();

  console.log(error);

  const receiverId = "66c21c39f900a8f7a144d840";
  const [formOfChatMessage, setFormOfChatMessage] = useState("");

  console.log(receiverId);

  const dataSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formOfChatMessage);

    try {
      const response = await conversationOfRequestMutation({
        id: receiverId,
        data: formOfChatMessage,
      }).unwrap();
      console.log(response);
      // setFormOfChatMessage({
      //   paramsId: "",
      //   conversationId: "",
      //   message: "",
      // });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <div className="relative mb-20 rounded-lg p-14 bg-dark_trans_purple">
          <div className="w-full h-[65vh] overflow-auto">
            <div className="max-w-[60%] flex gap-2.5 mb-4">
              <img
                src="https://pagedone.io/asset/uploads/1710412177.png"
                alt="Shanay image"
                className="w-10 h-11"
              />
              <div className="grid">
                <h5 className="text-light_purple text-sm font-semibold leading-snug pb-1">
                  Shanay cruz
                </h5>
                <p className="text-black text-sm font-semibold leading-snug px-3.5 py-2 bg-white rounded justify-start items-center gap-3 inline-flex">
                  Guts, I need a review of work. Are you ready?
                </p>
                <small className="text-gray-300 text-xs font-normal leading-4 py-1 justify-end items-center inline-flex mb-2.5">
                  05:14 PM
                </small>
              </div>
            </div>

            <div className="flex gap-2.5 mb-4 justify-end">
              <div className="max-w-[60%]">
                <h5 className="text-right text-light_purple text-sm font-semibold leading-snug pb-1">
                  You
                </h5>

                <p className="px-3.5 py-1.5 text-white text-sm font-normal leading-snug bg-light_purple rounded">
                  Yes, let’s see, send your work here Yes, let’s see, send your
                  work here Yes, let’s see, send your work here Yes, let’s see,
                  send your work here
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
          </div>
          <form onSubmit={dataSubmitHandler}>
            <div className="w-full  items-center gap-2 inline-flex justify-between">
              <div className="flex items-center gap-2 w-full">
                <input
                  className="grow shrink basis-0 w-full text-white focus:outline-none bg-transparent border-2 border-light_purple rounded-full  pl-3 pr-1 py-1 "
                  name="message"
                  placeholder="Type here..."
                  value={formOfChatMessage}
                  onChange={(e) => setFormOfChatMessage(e.target.value)}
                />
              </div>

              <Button
                title={"send"}
                width={"128px"}
                height={"38.4px"}
                type={"submit"}
              />
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default ChatBox;
