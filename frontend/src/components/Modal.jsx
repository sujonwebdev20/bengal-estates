const Modal = ({ isShow, setIsShow }) => {
  if (isShow === true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  const VideoModal = () => {
    return (
      <>
        <div
          onClick={() => setIsShow(false)}
          style={{
            backgroundColor: "#000000d6",
          }}
          className="fixed z-[99] top-0 left-0 right-0 bottom-0"
        ></div>

        <iframe
          className="fixed z-[99] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40rem]"
          src="https://www.youtube.com/embed/1EqsKq4dzYk?si=JgDO9BU_37IZ2QO3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </>
    );
  };

  return <>{isShow && <VideoModal />}</>;
};

export default Modal;
