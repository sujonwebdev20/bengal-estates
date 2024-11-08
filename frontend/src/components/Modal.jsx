const Modal = ({ isShow, setIsShow, children }) => {
  if (isShow === true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  const ModalContent = () => {
    return (
      <>
        <div
          onClick={() => setIsShow(false)}
          style={{
            backgroundColor: "#000000d6",
          }}
          className="fixed z-[99] top-0 left-0 right-0 bottom-0"
        ></div>
        {children}
      </>
    );
  };

  return <>{isShow && <ModalContent />}</>;
};

export default Modal;
